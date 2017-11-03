<template>
  <q-card @click="onClick(gig)">
    <q-item>
      <q-item-side :image="gig.image_url" />
      <q-item-main>
        <q-item-tile label>{{gig.title}}</q-item-tile>
        <q-item-tile sublabel>{{gig.place}}</q-item-tile>
      </q-item-main>
    </q-item>
  </q-card>
</template>

<script>
  export default {
    props: { gig: Object, onClick: Function }
  }
</script>

<style lang="stylus" type="text/stylus">
  .q-item:hover {
    background: alpha(#795548, 30%);
    cursor: pointer;
  }
</style>
