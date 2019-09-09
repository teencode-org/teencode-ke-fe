<template>
  <div>
    <nav class="navbar">
      <div class="nav-wrapper navbar-items">
        <router-link to="/" class="navbar-items__logo">
          <img src="../../assets/images/logo.png" alt="Teencode">
        </router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger navbar-items__menu">
          <i class="material-icons text-white">menu</i>
        </a>
        <ul class="right hide-on-med-and-down navbar-items__list">
          <li>
            <a href="#!">Home
              <i class="material-icons">keyboard_arrow_down</i>
            </a>
          </li>
          <li>
            <router-link to="/about">
              About
            </router-link>
          </li>
          <li><a href="#!">Blog</a></li>
          <li><a href="#!">Contact Us</a></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <a href="#!">Home
          <i class="material-icons">keyboard_arrow_down</i>
        </a>
      </li>
      <li>
        <router-link to="/about">
          About
        </router-link>
      </li>
      <li><a href="#!">Blog</a></li>
      <li><a href="#!">Contact Us</a></li>
    </ul>
  </div>
</template>

<script>
import M from 'materialize-css';

export default {
  name: 'Navbar',
  mounted() {
    const el = document.querySelector('.sidenav');
    M.Sidenav.init(el);
  },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/components/navbar.scss";
</style>
