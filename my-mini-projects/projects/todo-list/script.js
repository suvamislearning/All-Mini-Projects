const form = document.querySelector(".add-form");
const input = form.querySelector("input");
const list = document.querySelector(".tasks");

function toggleDone(checkbox) {
  const item = checkbox.closest(".task");
  item.classList.toggle("done", checkbox.checked);
}

list.addEventListener("change", (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    toggleDone(e.target);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `<label><input type="checkbox"> ${text}</label>`;
  list.appendChild(li);

  input.value = "";
  input.focus();
});
