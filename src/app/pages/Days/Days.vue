<template>
  <div class="full-width">
    <LoadSpinner :isLoading="isLoading"/>
    <div v-for="day in gigsByDay" v-if="!isLoading">
      <Day :day="day"/>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { retrieveDays } from '../../services/jota-api'

  export default {
    props: {
      gigService: {
        default: () => retrieveDays
      }
    },
    data () {
      return {
        gigsByDay: [],
        isLoading: false
      }
    },
    async created() {
      this.isLoading = true
      // Without vuex action
      this.gigsByDay = await retrieveDays
      // With vuex action
      await this.retrieve_days()
      this.gigsByDay = this.days
      this.isLoading = false
    },
    methods: {
      ...mapActions(['retrieve_days'])
    },
    computed: {
      ...mapState(['days'])
    }
  }
</script>

<style>
</style>
