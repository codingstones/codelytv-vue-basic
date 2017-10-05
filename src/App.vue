<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { registerGlobalComponents } from './GlobalComponentsLoader'

registerGlobalComponents()
export default {}
</script>

<style></style>
