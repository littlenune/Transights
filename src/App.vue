<template>
  <div id="app">
    <navbar :bts= "btsStation" @selectToGo="goStation = $event" @searchData="placeData = $event"></navbar>
    <headerBar @searcdDataFromHeader="placeData = $event"></headerBar>
    <mainPage :placeData="placeData" :goStation="goStation"></mainPage>
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
      placeData: [],
      goStation: ''
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
      let api = 'http://localhost:7777/place'      
      if(this.goStation != ''){
        api = 'http://localhost:7777/searchplace'
        console.log('load place when go')
      }
      
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
