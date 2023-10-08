const submit = document.querySelector("#subscribe-btn");
const success = document.querySelector(".success-wrapper");
const dismiss = document.querySelector("#dismiss-btn");

submit.addEventListener("click", () => {
  success.classList.add("show");
});

dismiss.addEventListener("click", () => {
  success.classList.remove("show");
});

const responsiveImage = document.getElementById("responsive-image");

function updateImageSource() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 480) {
    responsiveImage.src = "";
  } else if (windowWidth <= 768) {
    responsiveImage.src = "";
  }
}

// Initial call to set the image source based on the initial screen size
updateImageSource();

// Listen for window resize events and update the image source
window.addEventListener("resize", updateImageSource);
