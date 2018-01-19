<template>
  <div id="app">
    <router-view/>
    <Popup />
  </div>
</template>

<script>
import Popup from './components/Popup'

export default {
  name: 'App',
  components: {
    Popup
  }
}
</script>

<style>
@font-face {
  font-family: "Roboto Light";
  src: url("./assets/fonts/Roboto-Light.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Roboto Medium";
  src: url("./assets/fonts/Roboto-Medium.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
html,
body{
  padding: 0;
  margin: 0;
  font-size: 16px;
}
h1,h2,h3{
  margin-top: 0;
  text-align: center;
  font-weight: normal;
  font-family: "Roboto Medium";
}
#app {
  margin: 0 auto;
  padding: 10px;
  font-family: 'Roboto Light', Helvetica, sans-serif;
  color: #333;
  max-width: 1260px;
  box-sizing: border-box;
}
</style>
