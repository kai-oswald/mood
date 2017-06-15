<template>
<div id="app">
  <nav class="nav has-shadow is-fixed">
    <div class="container">
      <div class="nav-left">
        <a href="/" class="nav-item">
        <img src="/static/img/mood.png"/>
      </a>
      </div>

      <div class="nav-center">
        <div class="nav-item">
          <span>mood</span>
        </div>
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
      <span class="icon"><i class="fa fa-github" aria-hidden="true"></i></span>
      <span>github</span>    
    </a>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  </div>
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
.is-fixed {
  position: fixed;
  width: 100%;
}
</style>
