<template>
  <div id="products">
    <div class="card-columns">


        <div class="card img-loaded" v-for="item in items">
          <a v :href="`#/products/{{item.id}}`" >
          <img class="card-img-top probootstrap-animate fadeInUp probootstrap-animated"  v-bind:src="item.imagelink" alt="Card image cap">
          </a>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'products',
  data () {
    return {
      items: [
        {id:"123",imagelink:"https://productgallery.blob.core.windows.net/productimages/dinning/Antoinette_formaldining_timthumb.jpg"},
        {id:"124",imagelink:"https://productgallery.blob.core.windows.net/productimages/bedroom/Antoinette_timthumb.jpg"},
        {id:"125",imagelink:"https://productgallery.blob.core.windows.net/productimages/dinning/Antoinette_formaldining_timthumb.jpg"},
        {id:"123",imagelink:"https://productgallery.blob.core.windows.net/productimages/bedroom/Antoinette_timthumb.jpg"},
        {id:"123",imagelink:"https://productgallery.blob.core.windows.net/productimages/dinning/Antoinette_formaldining_timthumb.jpg"},
        {id:"123",imagelink:"https://productgallery.blob.core.windows.net/productimages/bedroom/Antoinette_timthumb.jpg"},
        {id:"123",imagelink:"https://productgallery.blob.core.windows.net/productimages/dinning/Antoinette_formaldining_timthumb.jpg"},
        {id:"123",imagelink:"https://productgallery.blob.core.windows.net/productimages/bedroom/Antoinette_timthumb.jpg"},
        {id:"123",imagelink:"https://productgallery.blob.core.windows.net/productimages/dinning/Antoinette_formaldining_timthumb.jpg"},
        {id:"123",imagelink:"https://productgallery.blob.core.windows.net/productimages/bedroom/Antoinette_timthumb.jpg"},
      ]
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
