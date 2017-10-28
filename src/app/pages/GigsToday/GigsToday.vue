<template>
    <div class="full-width">
      <div v-if="gigsToday">
        <Day :day="gigsToday"/>
      </div>
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
