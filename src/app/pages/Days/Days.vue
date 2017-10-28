<template>
  <div class="full-width">
    <LoadSpinner :isLoading="isLoading"/>
    <div v-for="day in gigsByDay" v-if="!isLoading">
      <Day :day="day" :onClick="goTo"/>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
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
      // Without vuex action
      this.gigsByDay = await this.gigService.retrieveNextGigs()
      // With vuex action
      await this.retrieve_days()
      this.gigsByDay = this.days
      this.isLoading = false
      this.mosicaRouter = new MosicaRouter(this.$router)
    },
    methods: {
      ...mapActions(['retrieve_days']),
      goTo(gig) {
        this.mosicaRouter.navigateToGig(gig.id)
      }
    },
    computed: {
      ...mapState(['days'])
    }
  }
</script>

<style>
</style>
