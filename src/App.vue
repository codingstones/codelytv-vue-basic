<template>
  <div id="q-app">
    <div class="layout-padding row justify-center">
      <Toolbar slot="header"></Toolbar>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import { registerGlobalComponents } from './app/GlobalComponentsLoader'

registerGlobalComponents()
export default {}
</script>

<style>

</style>
