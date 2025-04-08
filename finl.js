// Modal Logic
const modal = document.getElementById("communityModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "false");
  modal.querySelector(".modal-content").focus();
});

closeModalBtn.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
  openModalBtn.focus();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
    modal.setAttribute("aria-hidden", "true");
    openModalBtn.focus();
  }
});

// Toggle logic
function toggleSwitch(element) {
  const email = document.getElementById("email");
  const isChecked = element.getAttribute("aria-checked") === "true";

  if (!email.value || !email.value.includes("@")) {
    alert("Please enter a valid email to enable updates.");
    email.focus();
    return;
  }

  const newValue = !isChecked;
  element.setAttribute("aria-checked", newValue);
}

function toggleSwitchKey(event, element) {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    toggleSwitch(element);
  }
}
