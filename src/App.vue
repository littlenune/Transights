<template>
  <div id="app">
    <navbar :bts= "btsStation"></navbar>
    <headerBar></headerBar>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import headerBar from './components/Header'
import navbar from './components/Navbar'
export default {
  components: {
    'navbar': navbar,
    'headerBar': headerBar
  },

  data() {
    return {
      btsStation: []
    }
  },
  methods: {
    loadStation() {
      const api = 'http://localhost:7777/bts'
      axios.get(api).then(response => {
        this.btsStation = response.data
        console.log(response.data)
      }).catch(error => {
        console.log('error')
      })
    }
  },
  created() {
    this.loadStation();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
