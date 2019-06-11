<template>
  <div class="nav">

 
  </div>
</template>

<script>

export default {
  name: 'Nav',
  props: {
    msg: String
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

  .nav p{

  font-family: 'Montserrat', sans-serif;
  color:white;
  margin:17px 0px 0px 80px;
  font-size:20px;
  }
</style>
