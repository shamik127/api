<template>
   <div class="grid">
            <div class="grid__item" v-for="featuredArticle in featuredArticles">
                <p class="main__content-author">{{featuredArticle.author}}</p>
                <p class="main__content-title">
                    {{featuredArticle.title}}
                </p>
                <p class="main__content-title">
                    {{featuredArticle.description}}
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
