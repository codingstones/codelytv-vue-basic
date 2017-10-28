<template>
  <q-list v-if="!isLoading">
    <div class='day'>
      <q-list-header>{{day.day}}</q-list-header>

      <div v-for="gig in day.gigs">
        <Gig :gig ="gig" :onClick="onClick"/>
      </div>
    </div>
  </q-list>
</template>

<script>
  export default {
    props: { day: Object, isLoading: Boolean, onClick: Function }
  }
</script>

<style scoped>
  .q-list-header {
    color: black;
    font-weight: bold;
    font-size: 150%;
  }
</style>
