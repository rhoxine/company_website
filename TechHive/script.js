// Back to Top Button
const toTop = document.querySelector("#scrollToTop");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 150){
    toTop.classList.add("showButton");
  }else{
    toTop.classList.remove("showButton");
  }

  toTop.addEventListener('click', function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});
})