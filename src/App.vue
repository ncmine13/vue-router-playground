<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {routeHelpers} from './router/index'
export default {
  name: 'app',
  // beforeCreate () {
  //   if (this.$route.path != "/") {
  //     this.$store.dispatch('routeHelper')
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
