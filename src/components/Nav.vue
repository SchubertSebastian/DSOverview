<template>
  <div class="nav">

    <div class="groupF" v-for="item in items">
      <h3>{{item.displayGroup}}</h3>
    </div>

  </div>
</template>

<script>

import gj from '../testjson/testgroup.json'

export default {
  name: 'Nav',
  props: {
    msg: String
  },
  data () {
    return {
			items: gj
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav {

  width:280px;
  height:100%;
  background-color:#494A50;
  position:fixed;
  top:55px;
  left:0px;
  float:left;

  }

  .groupF {
    margin: 10px 0px;
    border-radius: 10px;
    border: 2px solid black;
  }

  .nav p{

  font-family: 'Montserrat', sans-serif;
  color:white;
  margin:17px 0px 0px 80px;
  font-size:20px;
  }
</style>
