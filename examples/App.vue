<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div> -->
  <Home></Home>
  <!-- <colorPicker v-model="color" v-on:change="headleChangeColor"></colorPicker> -->
</template>
<script>
import Home from './views/Home'
export default {
  data() {
    return {
      color: '#ff0000'
    }
  },
  components: {
    Home
  },
  methods: {
    headleChangeColor() {
      console.log('颜色改变')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
