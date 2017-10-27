<template>
  <div id="q-app">
    <div class="layout-padding row justify-center">
      <Toolbar slot="header"></Toolbar>
      <q-transition
        name="custom">
        <router-view class="layout-view"/>
      </q-transition>
    </div>
  </div>
</template>

<script>
import { registerGlobalComponents } from './app/GlobalComponentsLoader'

registerGlobalComponents()
export default {}
</script>

<style>
  .custom-enter-active {
    transition: all .3s ease;
  }
  .custom-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .custom-enter, .custom-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
