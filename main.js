const footer = document.querySelector(".article-footer");
const shareButton = document.querySelector(".share-icon");
const authorContainer = footer.querySelector(".author-container");
const iconsContainer = footer.querySelector(".icons-container");

window.addEventListener("resize", () => {
  if (
    window.innerWidth >= 1200 &&
    iconsContainer.classList.contains("active")
  ) {
    shareButton.classList.remove("active");
    iconsContainer.classList.remove("active-background");
    iconsContainer.classList.remove("active");
    iconsContainer.classList.add("hidden");

    iconsContainer.style.left = "";
    iconsContainer.style.top = "";
  } else if (
    window.innerWidth < 1200 &&
    !iconsContainer.classList.contains("hidden")
  ) {
    shareButton.classList.remove("active");
    footer.classList.remove("active-background");
    authorContainer.classList.remove("hidden");
    iconsContainer.classList.add("hidden");
  }
});

shareButton.addEventListener("click", () => {
  if (window.innerWidth >= 1200) {
    if (iconsContainer.classList.contains("active")) {
      shareButton.classList.remove("active");
      iconsContainer.classList.remove("active-background");
      iconsContainer.classList.remove("active");
      iconsContainer.classList.add("hidden");

      iconsContainer.style.left = "";
      iconsContainer.style.top = "";
    } else {
      shareButton.classList.add("active");
      iconsContainer.classList.add("active-background");
      iconsContainer.classList.add("active");
      iconsContainer.classList.remove("hidden");

      const { top: shareButtonTop } = shareButton.getBoundingClientRect();
      const {
        offsetLeft: shareButtonOffsetLeft,
        offsetWidth: shareButtonOffsetWidth,
      } = shareButton;

      const { offsetWidth: iconsContainerOffsetWidth } = iconsContainer;

      const shareButtonCenter = (
        shareButtonOffsetLeft +
        shareButtonOffsetWidth / 2
      ).toFixed();

      const iconsContainerPosition =
        shareButtonCenter - (iconsContainerOffsetWidth / 2).toFixed();
      const iconsContainerTopPosition = (shareButtonTop - 60).toFixed();

      iconsContainer.style.left = `${iconsContainerPosition}px`;
      iconsContainer.style.top = `${iconsContainerTopPosition}px`;
    }
  } else {
    if (iconsContainer.classList.contains("hidden")) {
      shareButton.classList.add("active");
      footer.classList.add("active-background");
      authorContainer.classList.add("hidden");
      iconsContainer.classList.remove("hidden");
    } else {
      shareButton.classList.remove("active");
      footer.classList.remove("active-background");
      authorContainer.classList.remove("hidden");
      iconsContainer.classList.add("hidden");
    }
  }
});
