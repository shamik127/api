<template>
<div class="modal__outer" @click.self="$emit('toggleModal')">

<div class="modal__inner shadow-lg">
        <h1 class="display-4">
            Join Us
        </h1>
        <p>
            Create an account to personalize your homepage, follow your favorite authors and publications, applaud stories you love, and more.
        </p>
        <button class="btn btn-info">Register</button>
        <p>Already have an account? <a href="#">Sign in</a></p>
        <p>To make Medium work, we log user data and share it with service providers. Click "Sign up" above to accept Medium’s <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.</p>
    </div>

</div>

</template>
<script>
export default {
  name: "Modal",
  props: {
    showModal: Boolean
  }
};
</script>
<style scoped>
h1 {
}
.modal__outer {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99;
    background: transparent;
}
.modal__inner {
    border-radius: 10px;
padding: 2em;
padding-top: 1em;
text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate3d(-50%, -50%, 0);
  background: #ecefef;
}

h1 {
    margin-bottom: 1em;
}

p {
    font-size: 0.9em;
    margin-top: 1em;
    margin-bottom: 1.3em;
}

.btn {
    width: 50%;
    max-width: 300px;
    margin-bottom: 1em;
    border-radius: 0;
    background: #0d7db2;
    font-size: 0.9em;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 1em;
    padding-bottom: 1em;
}
</style>
