<template>
  <div>
    <label>{{label}}</label>
    <q-datetime type="datetime"
                :error="invalidAndDirty"
                :label="label"
                :value="value"
                :format="format"
                @input="change($event)"
    ></q-datetime>
    <span class="label text-red"
          v-for="(key, index) in messageKeys"
          v-if="!validation[key] && validation.$dirty"
          :key="index">
      {{validationMessages[key]}}
    </span>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'eDatetime',
    props: {
      format: {
        type: String
      },
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
    methods: {
      change (value) {
        this.validation.$touch()
        this.$emit('input', value)
      }
    }
  }
</script>
