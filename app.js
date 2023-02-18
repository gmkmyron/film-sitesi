const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widthRadio = Math.floor(window.innerWidth / 270);
  let click = 0;
  const image = movieList[i].querySelectorAll("img").length;

  arrow.addEventListener("click", function () {
    click++;
    if (image - (4 + click) + (4 - widthRadio) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      click=0;
    }
  });
  console.log(window.innerWidth);
});

/* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")

ball.addEventListener("click", function(){
 items.forEach((item) => item.classList.toggle("active"))
})
