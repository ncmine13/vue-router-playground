<template>
  <div class="sidebar-wrapper">
    <div>
      <h1>side bar</h1>
      <ul v-for="elem in randomArr" :key="elem.id"> {{elem}} </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {

    }
  },
  computed: {
    randomArr () {
      return ['la', 'da','la', 'da','la', 'da','la', 'da','la', 'da']
    }
  }
}
</script>

<style>
.sidebar-wrapper {
  margin: 10px;
  background-color: yellow;
}

</style>
