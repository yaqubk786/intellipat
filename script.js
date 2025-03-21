//   -------------------Side Nav-----------------------//
function toggleNav() {
  const nav = document.getElementById("sideNav");
  const overlay = document.getElementById("overlay");
  nav.classList.toggle("open");
  overlay.classList.toggle("show");
}

function closeNav() {
  document.getElementById("sideNav").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}
//   -------------------Side Nav-----------------------//

//   -------------------Dropdown-----------------------//
const select = document.querySelector(".custom-select");
const dropdown = document.querySelector(".dropdown");
const selected = document.querySelector(".selected-option");

select.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    dropdown.style.display = "none";
  }
});

document.querySelectorAll(".dropdown li").forEach((item) => {
  item.addEventListener("click", () => {
    selected.textContent = item.textContent + " ▾";
  });
});

//   -------------------Dropdown-----------------------//

//   ----------------------------------carousel-------------------//
const track = document.querySelector(".carousel-track");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let scrollAmount = 0;
const cardWidth = 270; // width + gap

rightBtn.addEventListener("click", () => {
  if (scrollAmount <= track.scrollWidth - track.clientWidth - cardWidth) {
    scrollAmount += cardWidth;
    track.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

leftBtn.addEventListener("click", () => {
  if (scrollAmount >= cardWidth) {
    scrollAmount -= cardWidth;
    track.style.transform = `translateX(-${scrollAmount}px)`;
  }
});
//   ----------------------------------carousel-------------------//

/* -------------------------------modal------------------ */

function openModal() {
  const modal = document.getElementById("videoModal");
  modal.style.display = "block";
  const video = modal.querySelector("video");
  video.play();
  document.body.classList.add('modal-open');
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  modal.style.display = "none";
  const video = modal.querySelector("video");
  video.pause();
  video.currentTime = 0; // rewind video
  document.body.classList.remove('modal-open');

}

window.onclick = function (event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeModal();
  }
};
/* -------------------------------modal------------------ */
