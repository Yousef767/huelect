let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");

window.addEventListener('scroll',()=>{
  if(window.scrollY >= 100){
    nav.classList.add('color');
  }else{
    nav.classList.remove('color');
  }
})


menu.addEventListener("click", () => {
  nav.classList.toggle("activeMenu");
});


let goTop = document.querySelector('.goTop');
goTop.addEventListener('click',()=>{
  window.scrollTo(0,0)
})

window.addEventListener('scroll',()=>{
  if(window.scrollY >= 400){
    goTop.style.display='block'
  }else{
    goTop.style.display='none'
  }
})

let links = document.querySelectorAll('.mainLinks li a');
links.forEach((e)=>{
  e.addEventListener('click',()=>{
    links.forEach((e)=>{e.classList.remove('active')})
    e.classList.add('active');
    nav.classList.remove("activeMenu");
  })
})
