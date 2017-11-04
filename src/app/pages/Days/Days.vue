<template>
  <div class="full-width">
    <LoadSpinner :isLoading="isLoading"/>
    <div v-for="day in gigsByDay" v-if="!isLoading">
      <Day :day="day"/>
    </div>
  </div>
</template>

<script>
  import { retrieveDays } from '../../services/jota-api'

  export default {
    data () {
      return {
        gigsByDay: [],
        isLoading: false
      }
    },
    async created() {
      this.isLoading = true
      this.gigsByDay = await retrieveDays()
      this.isLoading = false
    },
    methods: {}
  }
</script>

<style>
</style>
