<template>
  <div class="display">

    <div v-for="item in items" v-if="item.displayGroupId==id">
      <p>{{item.display}}</p>
    </div>

  </div>
</template>

<script>

import dj from '../testjson/display.json'

export default {
  name: 'Display',
  props: {
    id: Number
  },
  data () {
    return {
			items: dj
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

p{

  color:white;

  /*margin:28px 0px 0px 50px;*/
  font-size:14px;
  background-color:#435884;
  width:100px;
  padding:8px 15px 4px 8px;
  margin:10px 0px 8px 20px;

  border: 2px solid #435884;
  border-radius:7px;
  font-weight:lighter;
}
</style>
