<template>
  <div>
    <e-input
      label="Name"
      v-model="name"
      :validation="$v.name"
      :validation-messages="validationMessages.name"
    ></e-input>
    <e-date-time
      format="YYYY/MM/DD - hh:mm"
      label="Date and time"
      v-model="dateTime"
      :validation="$v.dateTime"
      :validation-messages="validationMessages.dateTime"
      :value="dateTime"
    ></e-date-time>
    <FormButton :onClick="save" :disabled="$v.$invalid">Create Gig</FormButton>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { CREATE_GIG } from '../../shared/mosica-actions'
  import { required, minLength, maxLength } from 'vuelidate/lib/validators'
  import eInput from './embeeded/eInput.vue'
  import eDateTime from './embeeded/eDateTime.vue'
  import { isFutureDatetime } from './customValidations'

  export default {
    props: {
    },
    validations: {
      name: {
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
        name: '',
        dateTime: '',
        validationMessages: {
          name: {
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
      ...mapActions([CREATE_GIG]),
      save() {
        console.log('Saving...')
        this.create_gig({})
      }
    },
    components: {
      eInput, eDateTime
    }
  }
</script>
