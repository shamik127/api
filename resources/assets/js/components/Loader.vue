<template>
    <div class="loader" v-if="loading">
      <h1 class="display-4">
        Loading...
      </h1>
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
