<template>
  <div class="layout-padding">
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
      <FormButton class="full-width" :onClick="save" :disabled="$v.$invalid">Create Gig</FormButton>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { CREATE_GIG } from '../../shared/mosica-actions'
  import { required, minLength, maxLength } from 'vuelidate/lib/validators'
  import TextInput from '../../shared/TextInput.vue'
  import DateTimeInput from '../../shared/DateTimeInput.vue'
  import { isFutureDatetime } from './customValidations'

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
      ...mapActions([CREATE_GIG]),
      save() {
        this.create_gig({title: this.title, day: this.dateTime})
      }
    },
    components: {
      TextInput, DateTimeInput
    }
  }
</script>
