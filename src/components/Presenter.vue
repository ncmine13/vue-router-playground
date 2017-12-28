<template>
  <div class="presenter-wrapper">
    <div>
      <h1>Presenter</h1>
      <div> {{ presenter.name }} </div>
      <div> {{ presenter.id }} </div>
      <div> {{ $route.params.id }} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'presenter',
  data () {
    return {

    }
  },
  computed: {
    presenter () {
      let id = this.$store.state.currentPresenterId
      return this.$store.state.presenterList.find(presenter => presenter.id === id)
    }
  }
}
</script>

<style>
.presenter-wrapper {
  background-color: purple;
  color: white;
}
</style>
