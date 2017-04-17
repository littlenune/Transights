<template>
  <div id="app">
    <navbar :bts= "btsStation"></navbar>
    <headerBar></headerBar>
    <mainPage :placeData="placeData"></mainPage>
  </div>
</template>

<script>
import axios from 'axios'
import headerBar from './components/Header'
import navbar from './components/Navbar'
import mainPage from './components/Main'
export default {
  components: {
    'navbar': navbar,
    'headerBar': headerBar,
    'mainPage': mainPage
  },

  data() {
    return {
      btsStation: [],
      placeData: []
    }
  },
  methods: {
    loadStation() {
      const api = 'http://localhost:7777/bts'
      axios.get(api).then(response => {
        this.btsStation = response.data
        console.log(response.data)
      }).catch(error => {
        console.log('error load station')
      })
    },
    loadPlace() {
      const api = 'http://localhost:7777/place'
      axios.get(api).then(response => {
        this.placeData = response.data
      }).catch(error => {
        console.log('error load place')
      })
    }
  },
  created() {
    this.loadStation();
    this.loadPlace();
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
