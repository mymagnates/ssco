<template>
  <div id="singleproduct">
    test
  </div>
</template>

<script>
export default {
  name: 'singleproduct',
  data () {
    return {
      items: {id:"123",imaglink:"https://productgallery.blob.core.windows.net/productimages/bedroom/Antoinette_timthumb.jpg"}
    }
  },
  methods:{},
  mounted:function(){

  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
