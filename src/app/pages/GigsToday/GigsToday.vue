<template>
    <div class="full-width">
        <Day :day="gigsToday" v-if="gigsToday"/>
        <h4 v-else>No gigs for today, why don't you go to the cinema?</h4>
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
