<template>
  <div class="nav">
  <h2>Displaygroups</h2>
    <div class="groupF" v-for="item in items">
      <h3>{{item.displayGroup}}</h3>

      
    </div>
    
    <div id="get">
    <form class="ga" action = "http://172.18.154.56:8081/token" method = "POST">
         <input type = "submit" value = "Get Access Token">
      </form>

      <form action = "http://172.18.154.56:8081/display" method = "GET">
         <input type = "submit" value = "Get Display">
      </form>

      <form action = "http://172.18.154.56:8081/group" method = "GET">
         <input type = "submit" value = "Get Group">
      </form>
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
  
  
  .ga{margin-top:200px;}
  
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
    border-radius: 5px;
    border: 2px solid #F08629;
    color:white;
    background-color:#F08629;
    font-weight:lighter;
    font-size: 14px;
    text-align: center;
    width:75%;
    margin:auto;
    margin-top: 20px;
    
  }

.groupF h3{


  font-weight: lighter;
}
  .nav p{

  font-family: 'Montserrat', sans-serif;
  color:white;
  margin:17px 0px 0px 80px;
  font-size:20px;
  }

  h2{


  font-family: 'Montserrat', sans-serif;
  color:white;
  font-size:14px;
  font-weight: lighter;
  margin:50px 0px 30px 22px;
  letter-spacing: 2.3px;


  }

</style>
