<template>
  <q-item @click="onClick(gig)" :key="gig.id" highlight>
    {{gig.title}} - {{gig.place}}
  </q-item>
</template>

<script>
  export default {
    props: { gig: Object, onClick: Function }
  }
</script>
