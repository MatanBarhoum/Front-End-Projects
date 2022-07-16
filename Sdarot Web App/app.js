const action = () => {
    console.log("123");
}


const arrows = document.querySelectorAll(".series-grid-arrow");
const seriesLists = document.querySelectorAll(".movie-list");
const seriesLength = document.querySelectorAll(".series-grid-item");
var clickCounter = 0;
var seriesNumberOfClicks = seriesLength.length - 6;
console.log(clickCounter)
console.log(clickCounter >= seriesNumberOfClicks)
arrows.forEach((arrow,i) => {
    arrow.addEventListener("click", () => {
        if (clickCounter >= seriesNumberOfClicks) {
            seriesLists[i].style.transform = `translateX(0px)`;
        } else {
            clickCounter++;
            console.log(clickCounter)
            let space = seriesLists[i].computedStyleMap().get("transform")[0].x.value;
            console.log(space);
            seriesLists[i].style.transform = `translateX(${space - 300}px)`;
        }
    })
})

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideHide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
  }
  
