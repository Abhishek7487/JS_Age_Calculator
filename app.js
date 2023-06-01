let error = document.querySelector(".error");

let dateEl = document.querySelector("#dob");
let ageEl = document.querySelector(".desc");
let ageContainerEl = document.querySelector(".age");

dateEl.addEventListener("change", getAge);

function getAge(e) {
  let selectedDate = new Date(e.target.value);
  if (selectedDate.getTime() > Date.now()) {
    error.style.display = "block";
    return;
  }
  let { year, month, day } = calcAge(selectedDate);
  displayAge(year, month, day);
}

function calcAge(date) {
  let dateObj = date.getTime();
  let todayDate = Date.now();

  let ageDiffMs = todayDate - dateObj;

  let ageDiff = new Date(ageDiffMs);

  let year = ageDiff.getFullYear() - 1970;
  let month = ageDiff.getMonth();
  let day = ageDiff.getDate() - 1;
  return { year, month, day };
}

function displayAge(year, month, day) {
  ageEl.textContent = `Your Age is: ${year}`;
  ageContainerEl.children[0].textContent = year;
  ageContainerEl.children[1].textContent = month;
  ageContainerEl.children[2].textContent = day;
}
