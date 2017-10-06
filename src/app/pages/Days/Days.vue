<template>
  <div class="layout-padding row justify-center">
    <q-toolbar color="primary">
      <q-toolbar-title>
        MOSICA
      </q-toolbar-title>
      <q-btn flat @click="openInfo">Info</q-btn>
    </q-toolbar>

    <div style="width: 100%">
      <LoadSpinner :isLoading="isLoading"/>
      <div class="day" v-for="day in gigsByDay" v-if="!isLoading">
        <Day :day="day" :onClick="goTo"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import fetchJsonp from 'fetch-jsonp'
  import * as mosicaCore from 'mosica-core'
  import { HttpClient } from '../../services/HttpClient'
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
        isLoading: false
      }
    },
    async created() {
      this.isLoading = true
      this.gigsByDay = await this.gigService.retrieveNextGigs()
      this.isLoading = false
    },
    methods: {
      goTo(gig) {
        console.log('Moviendo a página de concierto', gig)
        // this.$router.push({ name: 'gig' + params: gig })
        this.$router.push('gig/' + gig.id)
      },
      openInfo() {
        console.log('Opening info')
        this.$router.push('gig')
      }
    },
    computed: {
      ...mapState(['gigs'])
    }
  }
</script>

<style>
</style>
