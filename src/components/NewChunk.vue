<template>
  <div>
    <div class="chunk-wrapper">
      <h1>New Chunks</h1>
      <div> {{ $route.params.id }} </div>
      <div>{{data}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    name: 'NewChunk'
    return {
      // data: this.$store.state.dynamicData
    }
  },
  computed: {
    data () {
      return this.$store.state.dynamicData
    }
  }
}
</script>

<style>
.chunk-wrapper {
  /* position: absolute; */
  /* top: 0; */
  /* left: 25vw; */
  width: 400px;
  height: 400px;
  background-color: purple;
}
</style>
