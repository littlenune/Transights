<template>
  <div id="app">
    <navbar></navbar>
    <headerBar></headerBar>
    <router-view></router-view>
  </div>
</template>

<script>
import headerBar from './components/Header'
import navbar from './components/Navbar'
export default {
  components: {
    'navbar': navbar,
    'headerBar': headerBar
  },
  name: 'app'
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
