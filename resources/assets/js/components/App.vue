<template>
<div>
    <MainNav :showModal="showModal" v-on:toggleModal="showModal = !showModal"/>
    <Loader :loading="loading"/>

    <Modal v-on:toggleModal="showModal = !showModal" v-if="showModal" v-cloak/>
    <div class="row" v-if="!loading">
      <SideBar :article="article"/>
      <div class="col-md-7 content">
        <div class="main__content">
            <BackgroundLogo />
            <h1 class="main__content-intro display-4">Have any <span>scientific doubts?</span></h1>
            <p class="edt__choise-author shadow-lg">{{article.author}}</p>
            <IntroContent :article="article" />
            <ArticleGrid :featuredArticles="featuredArticles"/>
      </div>
    </div>
    <div class="col-md-2">

    </div>
<FileUpload />
</div>
</div>
</template>

<script>
var FileUplaod = require("./FileUpload.vue");
var Loader = require("./Loader.vue");
var BackgroundLogo = require('./BackgroundLogo.vue');
var IntroContent = require('./IntroContent.vue');
var MainLogo = require('./MainLogo.vue');
var MainNav = require('./MainNav.vue');
var SideBar = require('./SideBar.vue');
var ArticleGrid = require('./ArticleGrid.vue');
var Modal = require('./Modal.vue');

export default {
  name: "App",
  components: {
    MainNav: MainNav,
    Loader: Loader,
    Modal: Modal,
    IntroContent: IntroContent,
    SideBar: SideBar,
    MainLogo: MainLogo,
    FileUpload: FileUplaod,
    BackgroundLogo: BackgroundLogo,
    ArticleGrid: ArticleGrid
  },
  data() {
    return {
      loading: true,
      articles: [],
      article: {},
      showModal: false,
      featuredArticles: [],
      tags: [
        "story",
        "news",
        "poetry",
        "defence",
        "space",
        "trending",
        "humor",
        "science",
        "physics"
      ]
    };
  },
  created: function() {
    this.$http
      .get(
        "https://newsapi.org/v1/articles?source=reuters&apiKey=d4850e40dbe941518185860fd3a35655"
      )
      .then(response => {
        this.articles = response.data.articles;
        this.article = this.articles[1];
        this.featuredArticles = this.articles.slice(1, 7);
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
#app {
  width: 100%;
}

div.row {
  margin: 0 auto;
  width: 100%;
  height: 100vh;
}

p {
  margin: 0;
}

.content {
  padding-right: 0;
  padding-left: 0;
}

.content > div {
  padding: 2em 3em;
}

.edt__choise-author {
  display: inline-block;
  background: #0d7db2;
  color: #fff;
  font-size: 0.8em;
  padding: 0.5em 0.8em;
  font-weight: 700;
  margin-top: 3em;
}

.main__content {
  position: relative;
}

.main__content-intro {
  font-weight: 700;
}

.main__content-intro span {
  font-weight: 100;
  display: block;
}

.checked {
    color: orange;
}
</style>
