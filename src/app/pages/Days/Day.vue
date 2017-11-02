<template>
  <q-card v-if="!isLoading">
    <div class='day'>
      <q-card-title>{{dateLabel}}</q-card-title>

      <div v-for="gig in day.gigs">
        <GigRow :gig ="gig" :onClick="goTo"/>
      </div>
    </div>
  </q-card>
</template>

<script>
  import { MosicaRouter } from '../../services/MosicaRouter'
  import { localizedFromIso } from '../../services/date-utils'

  export default {
    props: {day: Object, isLoading: Boolean},
    created() {
      this.mosicaRouter = new MosicaRouter(this.$router)
    },
    methods: {
      goTo(gig) {
        this.mosicaRouter.navigateToGig(gig.id)
      }
    },
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
