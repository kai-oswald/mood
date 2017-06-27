<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <h1 class="title">
              mood
            </h1>
            <div class="field">
              <p class="control">
                <input v-on:keyup="keyUp" v-model="user" class="input" type="text" placeholder="@realdonaldtrump">
              </p>
            </div>
            <a v-on:click="getMood" class="button is-primary is-fullwidth">Get in the mood</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        user: ''
      }
    },
    methods: {
      getMood: function () {
        rq.get("/api/" + this.user).then(function(res) {
          // Load the details page
        }).catch(function(err) {
          // TODO: Errorhandling
        });
      },
      keyUp: function(e) {
        if(e.key === "Enter") {
          this.getMood();
        }
      }
    }
  }

</script>
<style scoped>


</style>
