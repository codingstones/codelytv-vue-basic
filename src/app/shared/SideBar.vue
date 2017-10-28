<template>
  <q-scroll-area slot="left" style="width: 100%; height: 100%" inset-separator>
    <q-list-header>
      <img src="~assets/stones-small-red-white_letters.svg"/>
    </q-list-header>
    <q-side-link item to="/">
      <q-item-side icon="list" />
      <q-item-main label="All Gigs"/>
    </q-side-link>
    <q-side-link item to="/today">
      <q-item-side icon="today" />
      <q-item-main :label="gigsTodayComputed"/>
      <q-item-side icon="keyboard_arrow_right" />
    </q-side-link>
    <q-side-link item to="/">
      <q-item-side icon="event" />
      <q-item-main label="Tomorrow Gigs (5)"/>
    </q-side-link>
    <q-list-header>
      Admin
    </q-list-header>
    <q-side-link item to="/newGig">
      <q-item-side icon="note_add" />
      <q-item-main label="Create new Gig"/>
    </q-side-link>
  </q-scroll-area>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SideBar',
    computed: {
      ...mapGetters(['numberOfGigsToday']),
      gigsTodayComputed() {
        return `Gigs Today (${this.numberOfGigsToday})`
      }
    },
    methods: {
      clickDrawer() {
        this.parent.$refs.layout.toggleLeft()
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 60px;
    margin-top: 10px;
  }
  q-scroll-area {

  }
</style>
