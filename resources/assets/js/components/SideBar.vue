<template>
          <div class="col-md-3 sd__nav">
          <MainLogo />
        <p>
          {{article.description}}
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

</style>
