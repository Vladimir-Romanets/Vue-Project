<template>
  <div class="auth">
    <div v-html='form' v-if='form'></div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  computed: {
    form () {
      return this.$store.state.authForm
    }
  },
  created () {
    const url = encodeURIComponent(window.location.href)
    window.location.href = `https://frontend.recruiting.credy.com/auth?response_type=token&client_id=client&client_secret=secret&redirect_url=${url}`
    // this.$store.dispatch('auth')
  }
}
</script>

<style scoped>
.auth{
  position: relative;
  min-height: 420px;
  height: 100vh;
}
.auth > div{
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 320px;
  width: 100%;
  border: 1px solid #444;
  box-sizing: border-box;
  box-shadow: 5px 5px 5px rgba(100,100,100, .5);
}
</style>
