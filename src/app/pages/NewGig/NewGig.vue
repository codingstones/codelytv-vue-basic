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
                    :disabled="$v.$invalid" :isLoading="loading">
          Create Gig
        </FormButton>
      </div>
    </q-card>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { CREATE_GIG } from '../../services/jota-commands'
  import { required, minLength, maxLength } from 'vuelidate/lib/validators'
  import TextInput from '../../shared/TextInput.vue'
  import DateTimeInput from '../../shared/DateTimeInput.vue'
  import { isFutureDatetime } from './customValidations'
  import { createGigPayload } from '../../services/jota-payloads'
  import { JotaRouter } from '../../services/JotaRouter'

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
    created() {
      this.jotaRouter = new JotaRouter(this.$router)
    },
    data () {
      return {
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
    computed: {
      ...mapState(['loading'])
    },
    methods: {
      ...mapActions([CREATE_GIG]),
      async save() {
        try {
          await this.create_gig(createGigPayload(this.title, this.dateTime))
          this.jotaRouter.navigateToAllGigs()
        }
        catch (error) {
          console.log('Error creating ', error)
        }
      }
    },
    components: {
      TextInput, DateTimeInput
    }
  }
</script>
