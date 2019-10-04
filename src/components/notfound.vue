<template>
    <div id="a" :style="{'background-color' : color}">
        <h2>page not found</h2>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'notfound', 
  beforeCreate:function(){
    document.body.className= 'pink'
  }
  
}
</script>

<style>
h2{
    color: azure
}
</style>
