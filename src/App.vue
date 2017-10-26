<template>
  <div id="q-app">
    <div class="layout-padding row justify-center">
      <Toolbar slot="header"></Toolbar>
      <transition name="fade">
        <router-view class="layout-view"/>
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
