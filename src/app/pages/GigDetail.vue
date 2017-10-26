<template>
  <div style="width: 100%">
    DETAIL OF GIG {{this.$router.currentRoute.params.id}}
  </div>
</template>

<script>
  export default {
    created() {
      // We could mapState this route param with vuex-sync-router
      console.log('SHOWING DETAIL OF GIG WITH id: ', this.$router.currentRoute.params.id)
    }
  }
</script>

<style>
</style>
