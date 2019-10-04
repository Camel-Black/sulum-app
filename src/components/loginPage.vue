<template>
  <div id="a" :style="{'background-color' : color}">
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-12 col-xl-10">
                <div class="card shadow-lg o-hidden border-0 my-5" style="width: 400px;">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 col-xl-12">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h4 class="text-dark mb-4">Welcome Back!</h4>
                                        <l></l>
                                    </div>
                                    <div class="text-center"><a class="small" href="forgot-password.html">Forgot Password?</a></div>
                                    <div class="text-center"><a class="small" href="register.html">Create an Account!</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>
<script>
import l from './l'
export default {
  name: 'loginPage',
  data: function () {
    return {
      color: '#746ef0'
    }
  },
  components: {
    l
  }

}
</script>
<style>

</style>
