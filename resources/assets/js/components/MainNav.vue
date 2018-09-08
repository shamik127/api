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
  padding: 1em 2em;
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
  font-weight: 700;
  font-size: 0.75em;
}

.main__nav-r1-list button {
  font-weight: 700;
  font-size: 0.75em;
}

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

