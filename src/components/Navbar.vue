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
        <div class="field" v-for="item in lookingItems">
          <p class="control">
            <span class="select is-dark">
              <select>
                <option>{{ item.title }}</option>
                <option v-for="item2 in item.choices">{{ item2.choice }}</option>
              </select>
            </span>
          </p>
        </div>
        <a class="button is-dark">GO</a>        
      </CollapseItem>
      <CollapseItem class="collapse_item" title="Estimate time and pricing">
        <div class="field" v-for="item in estimate">
          <p class="control">
            <span class="select is-dark">
              <select>
                <option>{{ item.title }}</option>
                <option v-for="item2 in item.choices">{{ item2.choice }}</option>
              </select>
            </span>
          </p>
        </div>
        <a class="button is-dark">CALCULATE</a>    
      </CollapseItem>
    </Collapse>
  </div>
  </nav>
  
</div>
</template>

<script>
import { Collapse, Item as CollapseItem } from 'vue-bulma-collapse'

export default {
  components: {
    Collapse,
    CollapseItem
  },
  data() {
    return {
      navItems: [
        { title : 'What are you looking for?' },
        { title : 'Estimate time and pricing' }
      ],
      lookingItems: [
        { title: 'Select type of transpotation', choices: [ { choice: 'BTS'}, {choice: 'MRT'}] },
        { title: 'Select station', choices: [ {choice: '3'}, {choice: '4'}]}
      ],
      estimate: [
        { title: 'FROM', choices: [ { choice: 'BTS'}, {choice: 'MRT'}] },
        { title: 'TO', choices: [ { choice: 'BTS'}, {choice: 'MRT'}] }
      ]
    }
  }
}

</script>

<style scoped>
.navv {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  display: block;
  z-index: 25;
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
</style>
