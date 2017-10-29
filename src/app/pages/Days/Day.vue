<template>
  <q-list v-if="!isLoading">
    <div class='day'>
      <q-list-header>{{day.day}}</q-list-header>

      <div v-for="gig in day.gigs">
        <Gig :gig ="gig" :onClick="goTo"/>
      </div>
    </div>
  </q-list>
</template>

<script>
  import { MosicaRouter } from '../../services/MosicaRouter'

  export default {
    props: {day: Object, isLoading: Boolean},
    created() {
      this.mosicaRouter = new MosicaRouter(this.$router)
    },
    methods: {
      goTo(gig) {
        this.mosicaRouter.navigateToGig(gig.id)
      }
    }
  }
</script>

<style scoped>
  .q-list-header {
    color: black;
    font-weight: bold;
    font-size: 150%;
  }
</style>
