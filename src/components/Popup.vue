<template>
  <div class='popup' :class='className'>
    {{message}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Popup',
  computed: mapState({
    message: ({popup}) => popup.message,
    className: ({popup}) => popup.className
  }),
  updated () {
    this.closePopup()
  },
  methods: {
    closePopup () {
      this.message && this.$store.dispatch('closePopup')
    }
  }
}
</script>

<style scoped>
.popup{
  padding: 5px 10px;
  position: fixed;
  top: 20px;
  right: 15px;
  min-width: 50px;
  max-width: 100px;
  width: 0;
  height: 0;
  box-sizing: border-box;
  color: #fff;
  z-index: 1000;
  text-align: center;
  opacity: 0;
  transition: all .2s linear;
}
.popup:after {
  content: '';
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  top: 15px;
  right: -1px;
  transform: rotate(45deg) translate(0,-50%);
  z-index: 1000;
  opacity: 0;
  transition: all .2s linear;
}
.popup.error,
.popup.succes{
  width: 100%;
  height: auto;
  opacity: 1;
}
.popup.error,
.popup.error:after{
  background: #fb500e;
}
.popup.succes,
.popup.succes:after{
  background: #34960e;
}
</style>
