<template>
  <div>
    <h2 class="title has-text-centered">
      Most {{ type }} tweet ({{ mood.score }})
      </h2>
        <div class="card has-text-centered">
          <div class="card-content">
            <p class="title">
              {{ mood.tweet.text }}
            </p>
          </div>
          <footer class="card-footer">
          </footer>
        </div>
        </div>
</template>

<script>
  export default {
    name: "TweetDetail",
    props: ["mood", "type"]
  }

</script>
<style scoped>


</style>
