<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item">
      mood
    </a>
    </div>

    <div class="nav-center">
      <a class="nav-item">
      <span class="icon">
        <i class="fa fa-github"></i>
      </span>
    </a>
      <a class="nav-item">
      <span class="icon">
        <i class="fa fa-twitter"></i>
      </span>
    </a>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span v-on:click="toggleMenu" class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu">
      <a class="nav-item">
      Home
    </a>
      <a class="nav-item">
      Documentation
    </a>
      <a class="nav-item">
      Blog
    </a>

      <div class="nav-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
            <span>Tweet</span>
          </a>
          </p>
          <p class="control">
            <a class="button is-primary">
            <span class="icon">
              <i class="fa fa-download"></i>
            </span>
            <span>Download</span>
          </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      toggleMenu: function () {
        console.log("toggle");
        var menu = document.querySelector(".nav-menu");
        var className = menu.getAttribute("class");
        if (className == "nav-right nav-menu") {
          menu.className = "nav-right nav-menu is-active";
        } else {
          menu.className = "nav-right nav-menu";
        }
      }
    }
  }

</script>

<style>
/*
  @import url('/node_modules/bulma/css/bulma.css');
  @import url('/node_modules/font-awesome/css/font-awesome.min.css');
*/
</style>
