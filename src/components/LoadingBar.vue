<template>
<div style="max-width:100%;max-height:100%">
    <div class="loader" style="max-width:100%;color:black">Loading...</div>

</div>
 </template>

<script>
    /* eslint-disable */
export default {
    
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>



<style scoped>
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  color: red;
  border-top: 1.1em solid #002B60;
  border-right: 1.1em solid #002B60;
  border-bottom: 1.1em solid #002B60;
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


</style>