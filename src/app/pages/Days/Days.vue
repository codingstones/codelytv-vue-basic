<template>
  <div class="full-width">
    <LoadSpinner :isLoading="isLoading"/>
    <div v-for="day in gigsByDay" v-if="!isLoading">
      <Day :day="day" :onClick="goTo"/>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { MosicaRouter } from '../../services/MosicaRouter'
  import { gigService } from '../../services/mosica-instances'

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
