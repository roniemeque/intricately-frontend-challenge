<template>
  <div>
    <navbar></navbar>
    <breadcrumbs></breadcrumbs>
    <div class="content">
      <sidenav></sidenav>
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
    <footer-v></footer-v>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Sidenav from "./components/Sidenav.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";

export default {
  components: {
    navbar: Navbar,
    "footer-v": Footer,
    sidenav: Sidenav,
    breadcrumbs: Breadcrumbs
  }
};
</script>
