<template>
    <div>
        <div class="input-group mb-3">
  <input type="text" class="form-control" v-model="message" placeholder="message" aria-label="Recipient's username" aria-describedby="button-addon2">
  <div class="input-group-append">
    <button @click="sender()" class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
  </div>
</div>
<p>{{message}}</p>
    </div>
</template>
<script>
import request from 'request'
export default {
  data: function () {
    return {

      message: ' '
    }
  },
  computed: {
    sendings: function () {
      var messages = this.message
      return messages
    }
  },
  methods: {
    sender: function () {
      var options = { method: 'POST',
        url: 'http://localhost:8081/api/test',
        headers:
   { 'postman-token': '0f2931bf-e847-2297-6c25-1e6e8ebc42e7',
     'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },

        form: { message: this.sendings } }

      request(options, function (error, response, body) {
        if (error) throw new Error(error)

        console.log(body)
      })
    }
  }
}
</script>
