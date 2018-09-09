<template>
    <div>
        <div class="loader" v-if="loading != 2">
      <h1 class="display-4">
        Loading...
      </h1>
    </div>
    </div>
    
</template>
<script>
export default {
    name: 'Loader',
    props: {
        loading: Boolean
    }
}
</script>
<style scoped>

</style>
