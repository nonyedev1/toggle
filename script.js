const share = document.querySelectorAll(".share");
const shareDesktopArrow = document.querySelector(".shareDesktopArrow");
const hide = document.querySelector(".hide");
const hidden = document.querySelector(".hidden");
for (let shares of share) {
  shares.addEventListener("click", () => {
    document.querySelector(".profile").classList.toggle("hide");
    document.querySelector(".shareActive").classList.toggle("hide");
  });
}
shareDesktopArrow.addEventListener("click", () => {
  document.querySelector(".shareDesktop").classList.toggle("hidden");
});
