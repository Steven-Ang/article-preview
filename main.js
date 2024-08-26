const footer = document.querySelector(".article-footer");
const shareButton = document.querySelector(".share-icon");
const leftFooterChild = footer.querySelector(".left");
const authorContainer = leftFooterChild.querySelector(".author-container");
const iconsContainer = leftFooterChild.querySelector(".icons-container");

shareButton.addEventListener("click", () => {
  if (iconsContainer.classList.contains("hidden")) {
    footer.classList.add("hover-background");
    authorContainer.classList.add("hidden");
    iconsContainer.classList.remove("hidden");
  } else {
    footer.classList.remove("hover-background");
    authorContainer.classList.remove("hidden");
    iconsContainer.classList.add("hidden");
  }
});
