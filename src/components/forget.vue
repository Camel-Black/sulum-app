<template>
  <div>
    <h2> <div class="container" style="width: 1043px;">
        <div class="row justify-content-center" style="width: 495px;">
            <div class="col-md-9 col-lg-12 col-xl-10" style="width: 263px;">
                <div class="card shadow-lg o-hidden border-0 my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="p-5" style="width: 400px;">
                                    <div class="text-center">
                                        <h4 class="text-dark mb-2">Forgot Your Password?</h4>
                                        <p class="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                                    </div>
                                    <form class="user">
                                        <div class="form-group"><input class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email"></div><button class="btn btn-primary btn-block text-white btn-user"
                                            type="submit" style="background-color: #746ef0;">Reset Password</button></form>
                                    <div class="text-center">
                                        <hr><a class="small" href="register.html">Create an Account!</a></div>
                                    <div class="text-center"><a class="small" href="login.html">Already have an account? Login!</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </h2>
  </div>
</template>

<script>
export default {
  name: 'forget',
  data: function () {
    return {

    }
  }
}
</script>

<style>

</style>
