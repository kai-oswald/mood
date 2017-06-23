<template>
<div id="app">
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
