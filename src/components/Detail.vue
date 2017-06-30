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
          <hr>
          <Timeline :timeline="timeline" :user="user"></Timeline>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Average from "./Average";
import TweetDetail from "./TweetDetail";
import Timeline from "./Timeline";

function TweetPlaceholder() {
  this.score = 0;
  this.tweet = {
    text: "loading..",
    date: new Date(),
    favorite_count: 0,
    retweet_count: 0
  }
}
  export default {
    data() {
      return {
        user: this.$route.params.username,
        avg: 0,
        mostPositive: new TweetPlaceholder(),
        mostNegative: new TweetPlaceholder(),
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
    components: { Average, TweetDetail, Timeline }
  }

</script>
<style scoped>


</style>

