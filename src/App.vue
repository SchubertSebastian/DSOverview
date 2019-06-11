<template>
  <div id="app">
    <Head />

    <GroupBox />
  </div>
</template>

<script>
import GroupBox from './components/GroupBox.vue'
import Head from './components/Head.vue'

export default {
  name: 'app',
  components: {
    GroupBox,
    Head
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
