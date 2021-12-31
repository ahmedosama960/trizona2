// let div= document.querySelector('.div6')
// let divs=document.querySelectorAll('.div6 > div')

// console.log(divs)


// window.onscroll = function(){

//    if(window.scrollY >= div.offsetTop-600){
//    console.log(div.offsetTop)
//    divs.forEach(element => {
//       element.style.opacity = 1
//    });
   
// }
// }


// let element = document.querySelector('.travells-content')
// window.onscroll = function(){
//    console.log(window.scrollY)
//    if(window.scrollY >= element.offsetTop - 470){
//    element.style.opacity = 1
//    }
// }


let navButton= document.querySelector('.button-nav button');
let navbar=document.querySelector('.navbar ul');
navButton.onclick=function(){
   console.log("clicked")
   if(navbar.style.height=="0px" ||navbar.style.height==0  ){
      console.log("am in if")
      let li = document.querySelectorAll('.navbar ul li');
      li.forEach(element => {
         console.log("am in forech else");
         console.log(element)
         element.style.opacity = "1"
      });
      navbar.style.height="75px";
   }else{
      console.log("am in else");
      console.log(navbar.style.height);
      navbar.style.height = "0"
      let li = document.querySelectorAll('.navbar ul li');
      console.log(li)
      li.forEach(element => {
         console.log("am in forech else");
         console.log(element)
         element.style.opacity = "0"
      });
   }
}


