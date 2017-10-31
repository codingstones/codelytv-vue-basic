<template>
  <q-btn color="secondary"
         :disable="disabled"
         @click="onClick()">
    <q-spinner-mat size="20" v-if="isLoading"/>
    <slot v-else></slot>
  </q-btn>
</template>

<script>
  export default {
    props: ['onClick', 'disabled', 'isLoading']

  }
</script>
