<template>
    <div class="full-width">
        <Day :day="gigsToday" v-if="gigsToday"/>
        <h3 v-else>No gigs for today, why don't you go to the cinema?</h3>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['gigsToday'])
    }
  }
</script>
