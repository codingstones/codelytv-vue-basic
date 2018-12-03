<template>
  <div id="q-app" class="row justify-center">
    <q-layout ref="layout">
      <q-layout-header>
        <Toolbar @drawerClick="clickDrawer()"></Toolbar>
      </q-layout-header>

      <q-layout-drawer v-model="leftDrawerOpen"
                       :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
        <SideBar></SideBar>
      </q-layout-drawer>
      <transition
        leave="fadeOut"
        enter="fadeIn"
      >
        <q-page-container>
          <router-view class="layout-view"/>
        </q-page-container>
      </transition>
   </q-layout>
  </div>
</template>

<script>

export default {
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    clickDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>

<style>
  striped {
    color: yellow
  }
</style>
