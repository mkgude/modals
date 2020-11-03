const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal")

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
const showModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

for (let i = 0; i < btnShowModal.length; i++){
    btnShowModal[i].addEventListener("click", showModal)
}
btnCloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

