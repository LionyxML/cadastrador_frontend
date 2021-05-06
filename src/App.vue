<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import "@/assets/css/main.css";

export default {
  components : {
    Navbar
  }
}
</script>

<style>
</style>
