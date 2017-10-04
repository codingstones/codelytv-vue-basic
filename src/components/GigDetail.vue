<template>
  <div class="layout-padding row justify-center">
    <q-toolbar color="primary">
      MOSICA
    </q-toolbar>

    <div style="width: 100%">
      Detalle de un GIG
    </div>
  </div>
</template>

<script>
  import {
    QToolbar
  } from 'quasar-framework'

  export default {
    components: {
      QToolbar
    },
    data () {
      return {
        gigsByDay: []
      }
    }
  }
</script>

<style>
</style>
