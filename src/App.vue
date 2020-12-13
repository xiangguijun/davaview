<template>
  <div id="app">
    <!--<datav />-->
    <router-view />
  </div>
</template>

<script>
// import datav from './components/datav/index.vue'
// import screenfull from 'screenfull'
export default {
  name: 'app',
  // components: {
  //   datav
  // },
  data () {
    return {}
  },
  mounted () {
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
