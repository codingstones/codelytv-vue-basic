<template>
  <div>
    <e-input
      label="Name"
      v-model="name"
      :validation="$v.name"
      :validation-messages="validationMessages.name"
      :value="name"
    ></e-input>
    <e-date-time
      format="YYYY/MM/DD - hh:mm"
      label="Date and time"
      v-model="dateTime"
      :validation="$v.dateTime"
      :validation-messages="validationMessages.dateTime"
      :value="dateTime"
    ></e-date-time>
  </div>
</template>

<script>
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
            required: 'Date of birth is required.',
            isFutureDatetime: 'You cannot set a gig in a past date :('
          }
        }
      }
    },
    methods: {
      change (value) {
        this.validation.$touch()
        this.$emit('input', value)
      }
    },
    components: {
      eInput, eDateTime
    }
  }
</script>
