<template>
  <nav class="nav">
    <a class="nav_logo">TRANSIGHTS</a>
  </nav>
</template>

<script>

</script>

<style>

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: $c-white;
  display: flex;
  z-index: 10;
}

.nav_logo {
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #081c24;
  color: white;
  font-size: 20px;
}

</style>