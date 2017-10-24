<template>
  <q-btn color="primary" class="full-width" @click="onClick()">{{ label }}</q-btn>
</template>

<script>
  export default {
    props: ['onClick', 'label']
  }
</script>
