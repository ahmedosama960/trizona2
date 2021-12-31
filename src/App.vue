<template>

  <router-view />
    <CAlert color="warning" closeButton>
      This is warning dismissible alert.
    </CAlert>
</template>
<script>

export default {  
  data () {
    return {
      currentAlertCounter: 10
    }
  }
}
</script>
<style>
  @import './assets/css/normalize.css';
  @import './assets/css/style2.css';
  @import './assets/css/style.css';
  @import './assets/css/extrasmall.css';
  @import './assets/css/small.css';
  @import './assets/css/medium.css';
  @import './assets/css/large.css';
  @import './assets/scss/style.scss';
  
</style>
