<template>
  <div id="app">
    <div class="header"></div>
    <div class="left">
      <div><AddSnipets /></div>
      <div><DeleteComp /></div>
    </div>
    <div class="right">
      <TestAxios />
    </div>   
  </div>
</template>

<script>
import TestAxios from "@/components/TestAxios.vue";
import AddSnipets from "@/components/AddSnipets.vue";
import DeleteComp from "@/components/DeleteComp.vue";

export default {
  name: 'App',
  components: {
    TestAxios, AddSnipets, DeleteComp
  }
}
</script>

<style>
body{
  background-color: #252421;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.header{
  height: 60px;
  background-color: #B2213C;
  border-bottom: solid 3px white;
  background-image: url("../src/assets/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 70px;
}

.left{
  width: 300px;
  float: left;
  min-height: 1500px;
  border-right: solid 3px white;
}
.right{
  width: auto;
}

</style>

