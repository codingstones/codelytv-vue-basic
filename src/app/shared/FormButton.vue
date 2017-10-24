<template>
  <q-btn color="primary" class="full-width" @click="onClick()">
    <slot></slot>
  </q-btn>
</template>

<script>
  export default {
    props: ['onClick']
  }
</script>
