<template>
  <div class="group" >
    <div class="box" v-for="item in items">
      <h1>Displaygroup: <span> {{item.displayGroup}}</span></h1>

      <Display :id="item.displayGroupId"/>
    </div>
  </div>
</template>

<script>
import Display from './Display.vue'

import gj from '../testjson/testgroup.json'

export default {
  name: 'GroupBox',
  components: {
    Display
  },
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

.box{

  border:black 2.5px solid;
  width:600px;
  border-radius: 8px;
  margin:0px 0px 30px 0px;
  padding:27px 0px;
}
.group{

  float:left;
  margin-top: 90px;
  margin-left:320px;
  padding: 60px;
  position:relative;
  }


h1{

  font-family: 'Montserrat', sans-serif;
  color:black;
  margin:25px 0px 0px 20px;
  font-size:21px;
  margin-bottom:30px;
  font-weight:lighter;


}

h1 span{


    border-radius: 5px;
    border: 2px solid #F08629;
    color:white;
    background-color:#F08629;
    font-weight:lighter;
    padding:0px 6px;

}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
