<template>
  <q-btn color="primary"
         :disable="disabled"
         @click="onClick()">
    <slot></slot>
  </q-btn>
</template>

<script>
  export default {
    props: ['onClick', 'disabled']
  }
</script>
