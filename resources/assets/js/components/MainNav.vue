<template>
      <div class="main__nav">
      <div class="main__nav-r1">
          <span> Creative Designs</span>
        <div class="main__nav-r1-list">
          <span>Home</span>
          <span>Contact</span>
          <span>Editorial</span>
          <span>Login</span>
          <span @click.prevent="$emit('toggleModal')">getting started</span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'MainNav',
    props: {
      showModal: Boolean
    }
};
</script>
<style scoped>

.main__nav {
  user-select: none;
}

span {
  padding: 0.5em 1em;
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
}

span:last-child {
  border: 2px solid #0d7db2;
  color: #0d7db2;
}
</style>

