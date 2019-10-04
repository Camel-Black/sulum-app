<template>
    <div id="app">
        <form class="user" id="loginForm">
            <div class="form-group"><input v-model="username" class="form-control form-control-user" type="username" id="username" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="username"></div>
            <div class="form-group"><input v-model="password" class="form-control form-control-user" type="password" id="password" placeholder="Password" name="password"></div>
                <div class="form-group">
                    <div class="custom-control custom-checkbox small">
                        <div class="form-check"><input class="form-check-input custom-control-input" type="checkbox" id="formCheck-1"><label class="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                    </div>
                </div>
                <button @click.prevent="sender" class="btn btn-primary btn-block text-white btn-user" type="submit" style="background-color: rgb(116,110,240);">Login</button>
            <hr><a class="btn btn-primary btn-block text-white btn-google btn-user" role="button"><i class="fab fa-google"></i>&nbsp; Login with Google</a><a class="btn btn-primary btn-block text-white btn-facebook btn-user" role="button"><i class="fab fa-facebook-f"></i>&nbsp; Login with Facebook</a>
            <hr>
        </form>
        {{ username }} - {{ password }}
    </div>
</template>
<script>/* eslint-disable */
import axios from 'axios'
export default {
  name: 'l',

  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    sender () {
      var valueUP = this.propertyComputed
      console.log(valueUP)

      axios.post('http://localhost:8081/api/user',{user_name:valueUP.username,password:valueUP.password},
     { headers: { 'content-type':'application/x-www-form-urlencoded'}})
        .then(function(res){
          
        console.log("sent")
      }).catch(function(err){
        console.log(err)
      })
    }
  },

  computed: {
    propertyComputed () {
      console.log(this.username)
      var up={
        username:`${this.username}`,
        password:`${this.password}`
      }
      return up
    }
      
  }
}
</script>
