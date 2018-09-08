<template>
   <div class="grid">
            <div class="grid__item" v-for="featuredArticle in featuredArticles">
                <p class="main__content-author">{{featuredArticle.title}}</p>
                <p class="main__content-title">
                    {{featuredArticle.title}}
                </p>
                <p class="main__content-title">
                    {{featuredArticle.body}}
                </p> 
                <div class="main__content-social">
                    <span class="oi oi-briefcase"></span>
                    <span class="oi oi-british-pound"></span>
                    <span class="oi oi-browser"></span>
                </div>
            </div>
          </div>
        </div> 
</template>
<script>
export default {
    name: 'ArticleGrid',
    props: {
        featuredArticles: Array
    }
    
}
</script>
<style scoped>

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

</style>
