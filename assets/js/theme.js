const btn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const docHtml = document.documentElement;

// Verifica se já existe uma preferência salva no navegador
const currentTheme = localStorage.getItem("theme");

// Se houver preferência salva, aplica ela
if (currentTheme) {
    docHtml.setAttribute("data-bs-theme", currentTheme);
    atualizarIcone(currentTheme);
}

btn.addEventListener("click", () => {
    // Alterna entre light e dark
    let theme = docHtml.getAttribute("data-bs-theme");
    let newTheme = theme === "dark" ? "light" : "dark";

    docHtml.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Salva a escolha
    atualizarIcone(newTheme);
});

function atualizarIcone(theme) {
    if (theme === "light") {
        icon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
        icon.style.color = "#f39c12"; // Sol dourado
    } else {
        icon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
        icon.style.color = "#e7f2f7"; // Lua clara
    }
}