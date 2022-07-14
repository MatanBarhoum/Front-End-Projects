const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const imagesPerRowWidth2 = (window.innerWidth / 2) - 50;
const imagesPerRowWidth4 = (window.innerWidth / 4) - 50;
const movieListImage = document.querySelectorAll(".movie-list-item-img");
console.log(window.innerWidth)
movieListImage.forEach((img, i) => {
  if (window.innerWidth <= 980 && window.innerWidth >= 421 ) {
  img.style.width = `${imagesPerRowWidth2}px`;
  } else if (window.innerWidth <= 420) {
    img.style.width = `${window.innerWidth - 100}px `;
    console.log(img.style.width)
  }
  else{
    img.style.width = `${imagesPerRowWidth4}px`;
  }
});

/* Gets the section ID by passing from html using this as parameter, and using parentNode extracting the id.*/

var obj = document.getElementById('0');
obj.addEventListener('touchmove', function(event) {
  // If there's exactly one finger inside this element
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    // Place element where the finger is
    obj.style.transform = '200 px';
  }
}, false);

/* Swipe Section */
let touchstartX = 0
let touchendX = 0
let clickCounter = 0;
let divid;

function checkDirection() {
  if (touchendX < touchstartX) {

  /*  clickCounter++;
    console.log(item)
    const itemNumber = item.querySelectorAll("img").length;
    var ratio;
    var transformdecrement;
      if (window.innerWidth <= 980) {
        ratio = Math.floor(window.innerWidth / imagesPerRowWidth2);
        transformdecrement = imagesPerRowWidth2 + 31;
      } else {
        ratio = Math.floor(window.innerWidth / imagesPerRowWidth4); 
        transformdecrement = imagesPerRowWidth4 + 31;
      }
      if (ratio === 2) {
          ratio = 1;
      } else if (ratio === 4) {
        ratio = 3;
      }
      console.log(itemNumber - ((i) + clickCounter) + ((i) - ratio))
      if (itemNumber - ((i+1) + clickCounter) + ((i+1) - ratio) >= 0) {
        item.style.transform = `translateX(${
          item.computedStyleMap().get("transform")[0].x.value - transformdecrement
        }px)`;
      } else {
        item.style.transform = "translateX(0)";
        clickCounter = 0;
      } */
  };
  
}
  if (touchendX > touchstartX) alert('swiped right!')


document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX

  
  checkDirection()
})
/* End of swipe section */

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  var ratio;
  var transformdecrement;
  arrow.addEventListener("click", () => {
    if (window.innerWidth <= 980 && window.innerWidth >= 421) {
      ratio = Math.floor(window.innerWidth / imagesPerRowWidth2);
      transformdecrement = imagesPerRowWidth2 + 31;
    } else if (window.innerWidth <= 420) {
      ratio = Math.floor(window.innerWidth / ((window.innerHeight - 50)));
      console.log(ratio)
      transformdecrement = window.innerWidth - 70;
    }
    else{
      ratio = Math.floor(window.innerWidth / imagesPerRowWidth4); 
      transformdecrement = imagesPerRowWidth4 + 31;
    }
    clickCounter++;
    
    if (ratio === 2) {
        ratio = 1;
    } else if (ratio === 4) {
      ratio = 3;
    } else if (ratio == 0) {
      ratio = 1;
    }
    if (itemNumber - ((i+1) + clickCounter) + ((i+1) - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - transformdecrement
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
    
  });
});

console.log(window.innerWidth);
//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});