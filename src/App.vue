<template>
  <div id="app">
    <router-view class="container"/>
    <toastr></toastr>
  </div>
</template>

<script>
import Toastr from './components/Toastr'

export default {
  name: 'App',
  components: {
    Toastr
  }
}
</script>

<style>
 @import url('//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icon');
 .container {
   width: 80vw;
   margin: 0 auto;
 }

 .content {
   margin-top: 20px;
 }

 .md-button {
   margin-left: 0;
 }
</style>
