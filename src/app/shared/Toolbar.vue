<template>
  <q-toolbar color="primary">
    <img src="~assets/stones-small-red-white_letters.svg"/>
    <q-toolbar-title>
      Anarchy JS
    </q-toolbar-title>
    <q-btn color='secondary' @click="createGig">
      <q-icon name="note_add"/>
      New Gig
    </q-btn>
  </q-toolbar>
</template>

<script>
  import { MosicaRouter } from '../services/MosicaRouter'
  export default {
    async created() {
      this.mosicaRouter = new MosicaRouter(this.$router)
    },
    methods: {
      createGig() {
        this.mosicaRouter.navigateToCreateGig()
      }
    }
  }
</script>

<style scoped>
  img { max-width: 60px; }
</style>
