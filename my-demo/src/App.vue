<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <!-- <img src="./assets/logo.png"> -->
    <Demo></Demo>
    <!-- <router-view/> -->
  </div>
</template>

<script>
  import Demo from './components/Demo.vue'
  export default {
    name: 'App',
    data() {
      return{
        msg: '作者: 向阳'
      }
    },
    components: { Demo }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
