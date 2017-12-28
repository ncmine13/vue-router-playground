<template>
  <div class="list-wrapper">
    <div class="list">
      <div v-for="presenter in presenterList" :key="presenter.id">
        <router-link :to="presenter.routeKebab">
          <div v-on:click="goToPresenter(presenter.id, presenter.name)" class="presenter"> {{presenter.name}} </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {

    }
  },
  computed: {
    presenterList () {
      return this.$store.state.presenterList
    }
  },
  methods: {
    goToPresenter(id, name) {
      this.$store.commit('selectCurrentPresenter', id)
    }
  }
}
</script>

<style>
.list-wrapper {
  margin: 10px;
  background-color: orange;
  width: 70%;
}
.presenter {
  padding: 30px 10px;
  margin: 10px;
  background-color: purple;
  color: white;
  text-align: center;
  cursor: pointer;
}

</style>
