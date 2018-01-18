<template>
  <div>
    <article v-if="error" class="is-fixed-top message is-danger has-text-centered">
      <div class="message-body">
        {{ errorMsg }}
      </div>
    </article>
    <section class="hero is-light is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
            <img src="/static/img/mood.png"/>
              <h1 class="title">
                mood
              </h1>
              <div class="field">
                <p class="control">
                  <input v-on:keyup="keyUp" v-model="user" class="input" type="text" placeholder="@realdonaldtrump">
                </p>
              </div>
              <a v-on:click="validateUser" class="button is-primary is-fullwidth">Get in the mood</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: '',
        error: false,
        errorMsg: 'An error occured.'
      }
    },
    methods: {
      validateUser: function () {
        var self = this;
        rq.get("api/" + self.user).then(handleResponse).catch(function(err) {        
          // TODO: Errorhandling  
          console.log(err);     
          self.error = true;
          self.errorMsg = err;
        });

        function handleResponse(res) {
          if (typeof res[0] === "object" && res[0]) {
            self.error = true;            
            self.errorMsg = res[0].message;
          } else {
            self.error = false;
            self.$router.push({ name: "Detail", params: { username: self.user } });
          }
        }
      },
      keyUp: function (e) {
        if (e.key === "Enter") {
          this.validateUser();
        }
      }
    }
  }

</script>
<style scoped>
  .is-fixed-top {
    position: fixed;
    top: 0;
    width: 100%;
  }

</style>
