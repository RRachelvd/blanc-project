function changeTheme() {
  let body = document.querySelector("body");

  body.classList.toggle("dark-theme");
}

function blancFiction() {
  let link = "https://www.instagram.com/noir.projectgroep/";
  alert(
    `Thank you for your interest in Blanc, contemporary dance and art. Unfortunately Blanc is and ficitious ensemble. It is however inspired by a real life dance ensemble called Noir. You can find more information about Noir going here: ${link}`
  );
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

let button = document.querySelector("#button");
button.addEventListener("click", blancFiction);
let articleLink = document.querySelector("#link");
articleLink.addEventListener("click", blancFiction);
