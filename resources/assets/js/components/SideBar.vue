<template>
          <div class="col-md-3 sd__nav">
          <MainLogo />
        <p>
          {{article.body}}
        </p>
        <span class="oi oi-map"></span>
        <div>
          <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
        </div>
        <button class="btn shadow-lg" style="border-radius: 0; padding-top: 1.5em; padding-bottom: 1.5em;">ASK AN EXPERT</button>
      </div>
</template>


<script>
var MainLogo = require('./MainLogo.vue');
export default {
    name: 'SideBar',
    components: {
        MainLogo: MainLogo
    },
    props: {
        article: Object
    }   
}
</script>
<style scoped>
.sd__nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em 2em;
}

.sd__nav span {
  margin: 1em 0;
}

.sd__nav p {
  text-align: center;
  text-decoration: underline;
  font-size: 0.9rem;
}

.sd__nav button {
  width: 90%;
  margin: 3em auto;
  background: #0d7db2;
  color: #ffffff;
  font-size: 0.7em;
  font-weight: 700;
  letter-spacing: 0.06em;
  word-spacing: 0.1em;
}
</style>
