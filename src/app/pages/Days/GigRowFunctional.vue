<template functional>
  <q-card @click="props.onClick(props.gig)">
    <q-item>
      <q-item-side :image="props.gig.image_url" />
      <q-item-main>
        <q-item-tile label>{{props.gig.title}}</q-item-tile>
        <q-item-tile sublabel>{{props.gig.place}}</q-item-tile>
      </q-item-main>
    </q-item>
  </q-card>
</template>

<style lang="stylus" type="text/stylus">
  .q-item:hover {
    background: alpha(#795548, 30%);
    cursor: pointer;
  }
</style>
