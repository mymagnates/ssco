<template>
  <div id="contact">

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-12">

        

          <div class="row">
            <div class="col-xl-8 col-lg-12 mx-auto">
              <h1 class="mb-3">Contact</h1>

              <form action="#" method="post" class="probootstrap-form mb-5">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="fname">First Name</label>
                      <input type="text" class="form-control" id="fname" name="fname">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="lname">Last Name</label>
                      <input type="text" class="form-control" id="lname" name="lname">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" name="email">
                </div>
                <div class="form-group mb-4">
                  <label for="message">Message</label>
                  <textarea cols="30" rows="10" class="form-control" id="message" name="message"></textarea>
                </div>
                <div class="form-group">
                  <input type="submit" class="btn btn-primary" id="submit" name="submit" value="Send Message">
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
      <!-- END row -->




        </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
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
