<template>
  <div class="full-width">
    <LoadSpinner :isLoading="isLoading"/>
    <div class="day" v-for="day in gigsByDay" v-if="!isLoading">
      <Day :day="day" :onClick="goTo"/>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import fetchJsonp from 'fetch-jsonp'
  import * as mosicaCore from 'mosica-core'
  import { HttpClient } from '../../services/HttpClient'
  import { MosicaRouter } from '../../services/MosicaRouter'
  const gigService = new mosicaCore.GigService(HttpClient(fetchJsonp), new mosicaCore.Matcher())

  export default {
    props: {
      gigService: {
        default: () => gigService
      }
    },
    data () {
      return {
        gigsByDay: [],
        isLoading: false,
        mosicaRouter: null
      }
    },
    async created() {
      this.isLoading = true
      this.gigsByDay = await this.gigService.retrieveNextGigs()
      this.isLoading = false
      this.mosicaRouter = new MosicaRouter(this.$router)
    },
    methods: {
      goTo(gig) {
        this.mosicaRouter.navigateToGig(gig.id)
      }
    },
    computed: {
      ...mapState(['gigs'])
    }
  }
</script>

<style>
</style>
