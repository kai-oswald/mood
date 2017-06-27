<template>
  <div id="average" class="card has-text-centered">
      <p class="title">{{ user }}, your score is: {{ avg }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Average',
    props: ["avg", "user"]
  }

</script>
<style scoped>

</style>

