const openModalBtn = document.querySelector(".open-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

openModalBtn.addEventListener("click", function () {
  //add open-modal to modal-overlay
  modalOverlay.classList.toggle("open-modal");
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.toggle("open-modal");
});
