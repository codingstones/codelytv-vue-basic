<template>
  <div v-if="!isLoading">
    <div class='day'>
      <q-card-title>{{dateLabel}}</q-card-title>

      <div v-for="gig in day.gigs">
        <GigRow :gig ="gig" :onClick="onClick"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { localizedFromIso } from '../../services/date-utils'

  export default {
    props: {day: Object, isLoading: Boolean, onClick: Function},
    computed: {
      dateLabel() {
        return localizedFromIso(this.day.date)
      }
    }
  }
</script>

<style scoped>
  .q-card-title {
    color: black;
    font-weight: bold;
    font-size: 150%;
  }
</style>
