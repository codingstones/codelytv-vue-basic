<template>
  <div class="layout-padding row justify-center">
    <q-toolbar color="primary">
      <q-toolbar-title>
        MOSICA
      </q-toolbar-title>
      <q-btn flat @click="openInfo">Info</q-btn>
    </q-toolbar>

    <div style="width: 100%">
      <q-list>
        <div v-for="day in gigsByDay">
          <q-list-header>{{day.day}}</q-list-header>
          <q-item v-for="gig in day.gigs" @click="goTo(gig)"
                  :key="gig.id" highlight>
            {{gig.title}} - {{gig.place}}
          </q-item>
        </div>
      </q-list>
    </div>
  </div>
</template>

<script>
  import {
    QList,
    QListHeader,
    QItem,
    QBtn,
    QToolbar,
    QToolbarTitle
  } from 'quasar-framework'

  import { mapState } from 'vuex'
  import fetchJsonp from 'fetch-jsonp'
  import * as mosicaCore from 'mosica-core'
  import { HttpClient } from '../services/HttpClient'
  const gigService = new mosicaCore.GigService(HttpClient(fetchJsonp), new mosicaCore.Matcher())

  export default {
    components: {
      QList,
      QListHeader,
      QItem,
      QBtn,
      QToolbar,
      QToolbarTitle
    },
    props: {
      gigService: {
        default: () => gigService
      }
    },
    data () {
      return {
        gigsByDay: []
      }
    },
    async created() {
      this.gigsByDay = await this.gigService.retrieveNextGigs()
    },
    methods: {
      goTo(gig) {
        console.log('Moviendo a página de concierto', gig)
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
