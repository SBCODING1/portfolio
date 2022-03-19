let sectionBar =document.querySelector(".one")
let spans = document.querySelectorAll(".progresse span")

window.onscroll = function() {
    if(window.scrollY >= sectionBar.offsetTop -400){
        spans.forEach((span)=>{
            span.style.width = span.dataset.width;
            span.style.transition = "3s";

        })
    }
}