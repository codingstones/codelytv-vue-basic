<template>
  <div id="q-app" class="row justify-center">
    <q-layout ref="layout">
      <Toolbar slot="header" @drawerClick="clickDrawer()"></Toolbar>
      <SideBar slot="left"></SideBar>
      <q-transition
        leave="fadeOut"
        enter="fadeIn"
      >
        <router-view class="layout-view"/>
      </q-transition>
   </q-layout>
  </div>
</template>

<script>
import { registerGlobalComponents } from './app/GlobalComponentsLoader'
// eslint-disable-next-line no-unused-vars
import { NEW_GIG_PATH } from './router'

registerGlobalComponents()
export default {
  methods: {
    clickDrawer() {
      this.$refs.layout.toggleLeft()
    }
  }
}
</script>

<style>
  striped {
    color: yellow
  }
</style>
