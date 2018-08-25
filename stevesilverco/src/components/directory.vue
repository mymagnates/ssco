<template>
  <div id="directory">
    <div class="card-columns">

      <div class="card">
        <a href="single.html">
          <img class="card-img-top probootstrap-animate" src="src/assets/category_bed.jpeg" alt="coming soon ....">
          <div class="hovertoshow">Bedroom</div>
        </a>
      </div>

      <div class="card">
        <a href="single.html">
          <img class="card-img-top probootstrap-animate" src="src/assets/category_office.jpeg" alt="coming soon ....">
            <div class="hovertoshow">Office</div>
        </a>
      </div>

      <div class="card">
        <a href="single.html">
          <img class="card-img-top probootstrap-animate" src="src/assets/category_sofa.jpeg" alt="coming soon ....">
          <div class="hovertoshow">Living</div>
        </a>
      </div>

      <div class="card">
        <a href="single.html">
          <img class="card-img-top probootstrap-animate" src="src/assets/category_game.jpeg" alt="coming soon ....">
           <div class="hovertoshow">Entertainment</div>
        </a>
      </div>
      <div class="card">
        <a href="single.html">
          <img class="card-img-top probootstrap-animate" src="src/assets/category_occ.jpeg" alt="coming soon ....">
            <div class="hovertoshow">Occational</div>
        </a>
      </div>
      <div class="card">
        <a href="single.html">
          <img class="card-img-top probootstrap-animate" src="src/assets/category_dinning.jpeg" alt="coming soon ....">
          <div class="hovertoshow">Dinning</div>
        </a>
      </div>
      <div class="card">
        <a href="single.html">
          <img class="card-img-top probootstrap-animate" src="src/assets/category_cab.jpeg" alt="coming soon ....">
            <div class="hovertoshow">Cabinets</div>
        </a>
      </div>
      <div class="card">
        <a href="single.html">
          <img class="card-img-top probootstrap-animate" src="src/assets/category_acc.jpeg" alt="coming soon ....">
            <div class="hovertoshow">Accents</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'directory',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
