<template>
  <div>
    <section class="hero is-light is-fullheight"> 
      <div class="hero-body">
        <div class="container">
          <Average :avg="avg" :user="user"></Average>
          <hr>
          <TweetDetail :mood="mostPositive" type="positive"></TweetDetail>
          <hr>
          <TweetDetail :mood="mostNegative" type="negative"></TweetDetail>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Average from "./Average";
import TweetDetail from "./TweetDetail";

  export default {
    data() {
      return {
        user: this.$route.params.username,
        avg: 0,
        mostPositive: {},
        mostNegative: {},
        timeline: {}
      }
    },
    created: function() {
      var self = this;
      rq.get("/api/" + this.user).then(handleResponse).catch(function(err) {
        console.error(err);
      });

      function handleResponse(res) {
        self.avg = res.average;
        self.mostPositive = res.mostPositive;
        self.mostNegative = res.mostNegative;
        self.timeline = res.timeline;
      }
    },
    components: { Average, TweetDetail }
  }

</script>
<style scoped>


</style>

