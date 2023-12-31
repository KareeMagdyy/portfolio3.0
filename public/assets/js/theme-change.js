const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

const mainLogo = document.querySelector(".navbar-brand .main-logo");
const palastine = document.querySelector("#palastine");
const darkThemeLogo =
  "https://res.cloudinary.com/dadonc0ng/image/upload/v1689584903/Portfolio/Main%20Assets/logo-light_izhwdz.webp";
const lightThemeLogo =
  "https://res.cloudinary.com/dadonc0ng/image/upload/v1689584903/Portfolio/Main%20Assets/logo-black_zxeiyz.webp";

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  mainLogo.src = lightThemeLogo;
  palastine.src = "/assets/images/p-dark2.jpg";

  if (currentTheme === "light") {
    toggleSwitch.checked = true;
    mainLogo.src = lightThemeLogo;
    palastine.src = "/assets/images/p-dark2.jpg";
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    mainLogo.src = lightThemeLogo;
    palastine.src = "/assets/images/p-light2.jpg";
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    mainLogo.src = darkThemeLogo;
    palastine.src = "/assets/images/p-dark2.jpg";
    localStorage.setItem("theme", "dark");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
window.addEventListener("load", () => {
  if (currentTheme === null || currentTheme === "dark") {
    mainLogo.src = darkThemeLogo;
  } else {
    mainLogo.src = lightThemeLogo;
  }
});
