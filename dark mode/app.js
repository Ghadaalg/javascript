const moonPath = "M13 25C13 38.8071 25 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C25 0 13 11.1929 13 25Z";

const sunPath = "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

//clicking on the sun

darkMode.addEventListener('click',() => {
    //using anime.js
   const timeline = anime.timeline({
       duration: 750 ,
       easing:"easeOutExpo"
   }) ;
   //adding animations to the timeline
   timeline
   .add({
      targets: ".sun",
      d : [{value: toggle ? sunPath : moonPath}] 
   })
   .add({
       targets: "#darkMode",
       rotate: toggle ? 0 : 320
   }, "-= 350")
   .add({
       targets: "section",
       backgroundColor: toggle ? "rgb(200,200,200)" : "rgb(22,22,22)",
       color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
   }, "-= 700");
//switching 
toggle = !toggle;

});