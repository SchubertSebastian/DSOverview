<template>
  <div class="display">

    <div v-for="item in items" v-if="item.displayGroupId==1">
      <p>{{item.display}}</p>
    </div>

  </div>
</template>

<script>

import dj from '../testjson/display.json'

export default {
  name: 'Display',
  props: {

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
</style>
