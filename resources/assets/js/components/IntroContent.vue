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
              {{article.body}}
            </p>
            <button type="button" class="btn">Find an expert</button>
            <button type="button" class="btn">Articles by experts</button>
            
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

button:last-child {
  background: #111;
  color: white;
}

button:first-child {

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

div.statistic {
  box-shadow: none;
  transition: box-shadow 0.2s linear;
  background: #fff;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  padding: 1em;
}
div.statistic:first-child {
  background: #f3f3f3;
}

div.statistic:last-child {
  border-right: none;
}
div.statistic:hover {
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
}
</style>
