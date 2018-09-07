<template>
<div>
    <MainNav :showModal="showModal" v-on:toggleModal="showModal = !showModal"/>
    <Loader :loading="loading"/>
  <transition name="enter" >
    <Modal v-on:toggleModal="showModal = !showModal" v-if="showModal" v-cloak/>
  </transition>
    <div class="row" v-if="!loading">
<transition appear>
      <SideBar :article="article"/>
</transition>
      <div class="col-md-7 content">
        <div class="main__content">
            <BackgroundLogo />
            <h1 class="main__content-intro display-4">Latest articles</h1>
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

.main__nav {
  padding: 1.8em 2em;
}

.main__nav-r1 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.main__nav-r1 > span {
  font-size: 1.5em;
  font-weight: 800;
  line-height: 1.5em;
  margin: 0;

}

.main__nav-r1 .logo-txt {
  font-size: 0.8em;
  margin: 0 auto 0 4em;
}

.main__nav-r1-list {
  margin: 0 2em 0 auto;
}

.main__nav-r1-list span {
  padding: 0 0.7em;
  font-weight: 700;
  font-size: 0.75em;
}

.main__nav-r1-list button {
  font-weight: 700;
  font-size: 0.75em;
}

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

.pre__grid {

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


.edt__choise {
  display: flex;
  flex-direction: column;
  background: #f1f2f3;
}

.edt__choise-intro {
  text-transform: uppercase;
  font-weight: 700;
}

.edt__choise-title {
  font-weight: 700;
  color: #0d7db2;
  text-decoration: underline;
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

.edt__choise-description {
  width: 70%;
  margin-top: 3em;
  padding-left: 2em;
}

.main__content {
  position: relative;
}

.main__content .bkg {
  position: absolute;
  z-index: -1;
  pointer-events: none;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 5em;
}

#beaker-atom {
  opacity: 0.05;
}

.main__content-intro {
  font-weight: 700;
  text-decoration: underline;
}

.main__content-author {
  text-transform: uppercase;
  margin-bottom: 1.5em;
  font-weight: bold;
}

.main__content-list {
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;
}

.main__content-list span:nth-child(1) {
  font-weight: bold;
}

.main__content-social {
  display: flex;
  flex-direction: row;
  padding: 0.8em 0;
}

.main__content-social span {
  padding: 1em;
}

.main__content-social span:nth-child(1) {
  padding-left: 0em;
  margin-left: 0;
}

.main__content-social span:nth-child(1) {
  color: #1E88E5;
}

.main__content-social span:nth-child(2) {
  color: #f44336;
}

.main__content-social span:nth-child(3) {
  color: #6A1B9A;
}

.main__content-list span {
  text-transform: uppercase;
  padding: 0 1.5em;
}

.main__content-list span:nth-child(1) {
  padding-left: 0;
}

.main__content-title {
  padding-right: 2em;
  text-decoration: underline;
}

.grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 2em;
}

.grid__item {
  padding: 1em 2em;
  border-bottom: 1px solid #e3e3e3;
}

.sd__bar {
  padding: 2em 3em;
}

.sd__bar-intro {
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 1.5em;
  text-decoration: underline;
}

.sd__bar-tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2em;
}

.sd__bar-tags > span {
  margin: 0 1em 0.8em 0;
  text-transform: uppercase;
}

.sd__bar-tags > span:nth-child(1) {
  font-weight: bold;
}

.experts__logo-container {
  width: 100%;
  margin-bottom: 2em;
}

.experts__logo {
  opacity: 0.9;
}

.checked {
    color: orange;
}

.intro__content {
  margin-top: 2em;
  padding: 1em 0 3em 3em;
}

.intro__content p{
  margin: 1em 0 2em 0;
  text-decoration: underline;
}

.intro__content button{
  font-weight: bold;
  font-size: 0.8em;
  border-radius: 0;
}


</style>
