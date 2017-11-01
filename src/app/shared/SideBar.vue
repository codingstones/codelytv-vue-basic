<template>
  <q-scroll-area slot="left" style="width: 100%; height: 100%" inset-separator>
    <q-side-link item to="/all">
      <q-item-side icon="list" />
      <q-item-main label="All Gigs"/>
      <q-item-side icon="keyboard_arrow_right" />
    </q-side-link>
    <q-side-link item to="/today">
      <q-item-side icon="today" />
      <q-item-main :label="gigsTodayComputed"/>
      <q-item-side icon="keyboard_arrow_right" />
    </q-side-link>
    <q-ite
    <q-side-link item to="/tomorrow">
      <q-item-side icon="event" />
      <q-item-main :label="gigsTomorrowComputed"/>
      <q-item-side icon="keyboard_arrow_right" />
    </q-side-link>
    <q-item-separator></q-item-separator>
    <q-list-header>
      Admin
    </q-list-header>
    <q-side-link item to="/newGig">
      <q-item-side icon="note_add" />
      <q-item-main label="Create new Gig"/>
      <q-item-side icon="keyboard_arrow_right" />
    </q-side-link>
    <br>
    <q-list-header>
      <img src="~assets/stones.svg"/>
    </q-list-header>
  </q-scroll-area>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SideBar',
    computed: {
      ...mapGetters(['numberOfGigsToday', 'numberOfGigsTomorrow']),
      gigsTodayComputed() {
        return `Gigs Today (${this.numberOfGigsToday})`
      },
      gigsTomorrowComputed() {
        return `Gigs Tomorrow (${this.numberOfGigsTomorrow})`
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
    background-color: #f4f4f4;
  }
</style>
