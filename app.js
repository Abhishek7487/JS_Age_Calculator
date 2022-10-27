var inputField = document.querySelector("#dob");
var descEl = document.querySelector(".desc");
var ageEl = document.querySelector(".age");
var errorEl = document.querySelector(".error");
var spanEl = document.createElement("span");
descEl.appendChild(spanEl);

let currentDate = new Date();

function getAge() {
  var birthDate = document.querySelector("#dob").value;
  if (new Date(birthDate) > currentDate) {
    descEl.classList.add("hidden");
    ageEl.classList.add("hidden");
    errorEl.style.display = "block";
  }
  var age = calcAge(birthDate);
  displayAge(birthDate, age);
}

inputField.addEventListener("change", getAge);

function calcAge(birthDate) {
  var ageDifMil = Date.now() - new Date(birthDate).getTime();
  var ageDate = new Date(ageDifMil);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function displayAge(birthDate, age) {
  spanEl.textContent = age;
  let years = document.querySelector("#years");
  years.textContent =
    new Date().getFullYear() - new Date(birthDate).getFullYear();
  let months = document.querySelector("#months");
  months.textContent = new Date().getMonth() - new Date(birthDate).getMonth();
  let days = document.querySelector("#days");
  days.textContent = new Date().getDate() - new Date(birthDate).getDate();
}
