<template>
  <div class="group" >
    <div v-for="item in items">
      <h1>{{item.displayGroup}}</h1>

      <Display />
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
