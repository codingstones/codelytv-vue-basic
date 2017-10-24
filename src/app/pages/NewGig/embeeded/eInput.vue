<template>
  <div>
    <div>
      <label>{{label}}</label>
      <q-input required :error="invalidAndDirty"
             :value="value"
             @input="change($event)"/>
        <span class="label text-red"
              v-for="(key, index) in messageKeys"
              v-if="!validation[key] && validation.$dirty"
              :key="index">
          {{validationMessages[key]}}
        </span>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'eInput',
    props: {
      validation: {
        type: Object,
        required: true
      },
      value: {
        required: true
      },
      validationMessages: {},
      label: {}
    },
    computed: {
      messageKeys () {
        return Object.keys(this.validationMessages)
      },
      validAndDirty () {
        return !this.validation.$invalid && this.validation.$dirty
      },
      invalidAndDirty () {
        return this.validation.$invalid && this.validation.$dirty
      }
    },
    data () {
      return {}
    },
    methods: {
      change (value) {
        this.validation.$touch()
        this.$emit('input', value)
      }
    }
  }
</script>
<style scoped>


</style>
