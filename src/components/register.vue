<template>
  <div>
      <div class="container">
        <div class="card shadow-lg o-hidden border-0 my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-flex">

                    </div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h4 class="text-dark mb-4">Create an Account!</h4>
                            </div>
                            <form class="user">
                                <div class="form-group"><input v-model="username" class="form-control form-control-user" type="email" id="username" aria-describedby="emailHelp" placeholder="User Name" name="user_name"></div>
                                <div class="form-group"><input v-model="mobileNumber" class="form-control form-control-user" type="mobile number" id="mobilenumber" aria-describedby="emailHelp" placeholder="Mobile Number" name="mobile_number"></div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0"><input v-model="password" class="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password"></div>
                                    <div class="col-sm-6"><input v-model="rpassword" class="form-control form-control-user" type="password" id="exampleRepeatPasswordInput" placeholder="Repeat Password" name="password_repeat"></div>

                                </div>
                                <div v-if="password !== rpassword && rpassword !== ''">
                                    <div class="alert alert-danger" role="alert">
                                        <strong>{{mainMessage}}</strong>{{message}}
                                    </div>
                                </div>
                                <button @click.prevent="sender()" class="btn btn-primary btn-block text-white btn-user" type="submit">Register Account</button>
                                <hr><a class="btn btn-primary btn-block text-white btn-google btn-user" role="button"><i class="fab fa-google"></i>&nbsp; Register with Google</a><a class="btn btn-primary btn-block text-white btn-facebook btn-user" role="button"><i class="fab fa-facebook-f"></i>&nbsp; Register with Facebook</a>
                                <hr>
                            </form>
                            <div class="text-center"><a class="small" href="forgot-password.html">Forgot Password?</a></div>
                            <div class="text-center"><a class="small" href="login.html">Already have an account? Login!</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import request from 'request'
export default {
  beforeCreate: function () {
    document.body.className = 'pink'
  },
  data: function () {
    return {
      username: '',
      mobileNumber: '',
      password: '',
      rpassword: '',
      mainMessage: 'خطا',
      message: 'رمز عبور را تصحیح کنید'
    }
  },
  computed: {
    pEp () {
      if(this.password !== this.password2){
        return false
      }
      return true
    },
    valeOfdatas () {
      var values = {
        userName: `${this.username}`,
        mobileNumber: `${this.mobileNumber}`,
        password: `${this.password}`,
        password2: `${this.rpassword}`
      }
      return values
    }
  },
  methods: {
    sender () {
      if (this.pEp) {
        var options = { method: 'POST',
  url: 'http://localhost:8081/api/login',
  headers: 
   { 'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form: this.valeOfdatas
        }
request(options, function (error, response, body) {
  if (error) throw new Error(error);
});

      } else {
        this.mainMessage = '  خطا  '
        this.message = 'رمز عبور را تصحیح کنید'
      }
    }
  }
}
</script>

<style>

</style>
