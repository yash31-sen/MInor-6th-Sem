const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const lignt_logo = document.getElementsByClassName(".lignt_logo");
const dark_logo = document.getElementsByClassName(".dark_logo");
toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
        lignt_logo.display = "hidden";
        dark_logo.display = "hidden";
    }
    else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});




// navbar

// let a=document.getElementById("nav-bar-res");
// console.log(a);
// function show_hide_navlinks(){
//     console.log("yash");
//   let b = document.getElementsByClassName("responsive_nav_bar_div")
//   console.log(b);
  

// }




function show_hide_navlinks(){
    const x = document.querySelector(".responsive_nav_bar_div");
    // console.log(x);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }