<template>
  <div>
    <navbar></navbar>
    <div>
      <p>
        <router-link to="/microsoft/data">Company data</router-link>
        <router-link to="/microsoft">Company page</router-link>
      </p>
      <router-view></router-view>
    </div>
    <footer-v></footer-v>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    navbar: Navbar,
    "footer-v": Footer
  }
};
</script>
