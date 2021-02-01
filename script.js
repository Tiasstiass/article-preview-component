const shareBtn = document.getElementById("share-btn");
const container = document.getElementById("share-container");

shareBtn.addEventListener("click", () => {
  if (container.style.opacity == 0) {
    container.style.opacity = 100;
  } else container.style.opacity = 0;
});
