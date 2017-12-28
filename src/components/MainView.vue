<template>
  <div class="main-wrapper">
    <side-bar></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import sideBar from './SideBar'
import listComponent from './List'
import presenterComponent from './Presenter'

export default {
  name: 'MainView',
  data () {
    return {

    }
  },
  computed: {
    listShowing () {
      return this.$store.state.presenterListView
    },
    btnTxt () {
      return this.initialState ? 'go new chunk' : 'go back to main'
    }
  },
  methods: {
    changeStateData () {
      if(this.$store.state.initialState) {
        this.$store.state.dynamicData = 'hahaha'
      } else {
        this.$store.state.dynamicData = 'boooooooo'
      }
      this.$store.state.initialState = !this.$store.state.initialState
    }
  },
  components: {
    sideBar,
    presenterComponent,
    listComponent
  }

}
</script>

<style>
.main-wrapper {
  background-color: blue;
  display: flex;
}
.btn {
  background-color: orange;
  padding: 10px;
  cursor: pointer;
}

</style>
