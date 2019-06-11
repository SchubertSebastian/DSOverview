<template>
  <div id="app">
    <Head />

    <Nav />


    <GroupBox />
  </div>
</template>

<script>
import GroupBox from './components/GroupBox.vue'
import Head from './components/Head.vue'
import Nav from './components/Nav.vue'


export default {
  name: 'app',
  components: {
    GroupBox,
    Head,
    Nav
  }
}
</script>

<style>



body{
  background-color:#DDEAE9;

  margin:0px;

}


* {
  margin: 0px;
  padding: 0px;
}

#app {
font-family: 'Montserrat', sans-serif;  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
