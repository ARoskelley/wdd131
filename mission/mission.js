const themeSelector = document.getElementById("theme-selector");
const logo = document.querySelector(".logo");
const body = document.body;

function ChangeTheme(){

    if (!themeSelector) {
        console.error("themeSelector not found!");
        return;
    }
    if (!logo) {
        console.error("logo not found!");
        return;
    }

    if (themeSelector.value == "light") {
        body.classList.remove("dark");
        logo.src = "images/byui-logo-light.webp";
    } else {
        body.classList.add("dark");
        logo.src = "images/byui-logo-dark.png";
    }
}

document.addEventListener("DOMContentLoaded", ChangeTheme);
themeSelector.addEventListener('change', ChangeTheme);