<template>
    <q-card>
      <div class="layout-padding">
        <h4>Add a New Gig to Jota JS!</h4>
        <TextInput
          label="Insert Gig Title"
          v-model="title"
          :validation="$v.title"
          :validation-messages="validationMessages.title"
          placeholder="Type name of gig"
        ></TextInput>
        <DateTimeInput
          format="YYYY/MM/DD - hh:mm"
          label="Date and time"
          v-model="dateTime"
          :validation="$v.dateTime"
          :validation-messages="validationMessages.dateTime"
          :value="dateTime"
        ></DateTimeInput>
        <br><br>
        <FormButton class="full-width" :onClick="save"
                    :disabled="$v.$invalid" :isLoading="saving">
          Create Gig
        </FormButton>
      </div>
    </q-card>
</template>

<script>
  import { required, minLength, maxLength } from 'vuelidate/lib/validators'
  import { isFutureDatetime } from './customValidations'
  import { createGigPayload } from '../../services/jota-payloads'
  import { createGig } from '../../services/jota-api'

  export default {
    props: {
    },
    validations: {
      title: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(20)
      },
      dateTime: {
        required,
        isFutureDatetime
      }
    },
    data () {
      return {
        saving: false,
        title: '',
        dateTime: '',
        validationMessages: {
          title: {
            required: 'Name is required.',
            minLength: 'Minimum 5 characters.',
            maxLength: 'Maximum 20 characters.'
          },
          dateTime: {
            required: 'Date and time of gig are required.',
            isFutureDatetime: 'You cannot set a gig in a past date :('
          }
        }
      }
    },
    methods: {
      async save() {
        try {
          this.saving = true
          await createGig(createGigPayload(this.title, this.dateTime))
          this.saving = false
          this.jotaRouter.navigateToAllGigs()
        }
        catch (error) {
          console.log('Error creating ', error)
        }
      }
    }
  }
</script>
