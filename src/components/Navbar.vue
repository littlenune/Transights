<template>
<div>
  <nav class="navv">
    <a class="nav_logo">TRANSIGHTS</a>
    <div class="nav_hamburger">
      <div class="nav_bar"></div>
      <div class="nav_bar"></div>
      <div class="nav_bar"></div>      
    </div>
    <div>
    <Collapse is-fullwidth class="collapse_list" >
      <CollapseItem class="collapse_item" title="What are you looking for?">
        <div class="field">
          <p class="control">
            <span class="select">
              <select v-model="selectType">
                <option disabled value="">Select type of transportation</option>
                <option>BTS</option>
              </select>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <span class="select">
              <select v-model="selectStation">
                <option disabled value="">Select station</option>
                <option v-if="selectType == 'BTS'" v-for="station in bts">{{ station.stationName }}</option>
              </select>
            </span>
          </p>
        </div>
        <a class="button is-dark" v-on:click="go()">GO</a>        
      </CollapseItem>
      <CollapseItem class="collapse_item" title="Estimate time and pricing">
        <div class="field">
          <p class="control">
            <span class="select">
              <select v-model="fromStation">
                <option disabled value="">FROM</option>
                <option v-for="station in bts">{{ station.stationName }}</option>
              </select>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <span class="select">
              <select v-model="toStation">
                <option disabled value="">TO</option>
                <option v-for="station in bts">{{ station.stationName }}</option>
              </select>
            </span>
          </p>
        </div>
        <a class="button is-dark" v-on:click="calculateTP()">CALCULATE</a>    
        <nav class="level" v-if="calculate">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Time (Min)</p>
              <p class="title">{{ this.dataCal[0].estimated }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Price (Baht)</p>
              <p class="title">{{ this.price }}</p>
            </div>
          </div>
        </nav>
      </CollapseItem>
    </Collapse>
  </div>
  </nav>
</div>
</template>

<script>
import { Collapse, Item as CollapseItem } from 'vue-bulma-collapse'
import axios from 'axios'

export default {
  props: ['bts'],
  components: {
    Collapse,
    CollapseItem
  },
  data() {
    return {
      selectType: '',
      selectStation: '',
      fromStation: '',
      toStation: '',
      calculate: false,
      dataCal : [],
      price : ''
    }
  },
  methods: {
    go() {
      this.$emit('selectToGo', this.selectStation)
      axios.post('http://localhost:7777/selectStation', {
        stationName: this.selectStation
      }).then(response => {
        axios.get('http://localhost:7777/selectStation').then(response => {
          this.$emit('searchData', response.data )
        })
      })
    },
    calculateTP(){
      axios.post('http://localhost:7777/time', {
        dept : this.fromStation,
        arri : this.toStation
      }).then( response => {
        this.dataCal = response.data
        axios.post('http://localhost:7777/price', {
          dept : this.dataCal[0].dept,
          arri : this.dataCal[0].arri
        }).then( response2 => {
          this.price = response2.data[0].pc
          this.calculate = true;
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navv {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  display: block;
  z-index: 25;
  background-color: #ffffff;
}

.nav_logo {
  width: 300px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222F39;
  color: white;
  font-size: 25px;
  font-weight: bold;
}
.collapse_item {
  font-size: 20px;
}

.control {
  font-size: 0.96rem;
}

.select {

  select {
    width: 250px;

    &:focus {
      border-color: #777777;
    }
  }
}

.button {
  width: 250px;
}

.level {
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
