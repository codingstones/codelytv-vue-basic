<template>
  <q-item @click="onClick(gig)" :key="gig.id" highlight link striped>
    {{gig.title}} - {{gig.place}}
  </q-item>
</template>

<script>
  export default {
    props: { gig: Object, onClick: Function }
  }
</script>
