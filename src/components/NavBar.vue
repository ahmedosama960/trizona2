<template>
  <div class="main-nav">
    <div class="container">
      <nav class="navbar">
        <div class="logo" style="position: relative">
          <img src="../assets/images/logo.png" alt="" /><span
            style="
              position: absolute;
              right: -31px;
              bottom: 24px;
              color: #083763;
              font-weight: 500;
            "
            >RIZONA</span
          >
        </div>

        <div class="button-nav">
          <button @click="navaACtion()">| | |</button>
        </div>
        <ul class="nav-list">
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
        </ul>
      </nav>
    </div>
    <div class="main-header">
      <div class="overlay"></div>
      <div class="main-content">
        <div class="main-content-written">
          <div class="">
            <h1>Plan Your Travel Now!</h1>
            <p>
              Experience the various exciting tour and travel packages and Make
              hotel reservations, find vacation packages, search cheap hotels
              and events
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navaACtion() {
      let navbar = document.querySelector(".navbar ul");
      if (navbar.style.height == "0px" || navbar.style.height == 0) {
        console.log("am in if");
        let li = document.querySelectorAll(".navbar ul li");
        li.forEach((element) => {
          console.log("am in forech else");
          console.log(element);
          element.style.opacity = "1";
        });
        navbar.style.height = "75px";
      } else {
        console.log(navbar.style.height);
        navbar.style.height = "0";
        let li = document.querySelectorAll(".navbar ul li");
        console.log(li);
        li.forEach((element) => {
          console.log("am in forech else");
          console.log(element);
          element.style.opacity = "0";
        });
      }
    },
  },
};
</script>

<style></style>
