<template>
             <div class="intro__content">
            

            <div class="ui four statistics">
  <div class="statistic">
    <div class="value">
      22
    </div>
    <div class="label">
      Experts
    </div>
  </div>
  <div class="statistic">
    <div class="value">
      30
    </div>
    <div class="label">
      Institutes
    </div>
  </div>
  <div class="statistic">
    <div class="value">
      <i class="plane icon"></i> 100+
    </div>
    <div class="label">
      Articles
    </div>
  </div>
</div>



            <p style="margin-top: 2em;">
              {{article.description}}
            </p>
            <button type="button" class="btn btn-outline-secondary shadow-lg">Find an expert</button>
            <button type="button" class="btn btn-secondary shadow-lg">Articles by experts</button>
            
          </div>
</template>
<script>
export default {
    name: 'IntroContent',
    props: {
        article: Object
    }
}
</script>
<style scoped>

</style>
