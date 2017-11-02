<template functional>
  <q-item @click="props.onClick(props.gig)" :key="props.gig.id" highlight link striped>
    {{props.gig.title}} - {{props.gig.place}}
  </q-item>
</template>
