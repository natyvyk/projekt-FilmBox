document.querySelector("#menu-tlacitko").addEventListener("click", () => {
    const polozkyMenu = document.querySelector("#menu-polozky")
    polozkyMenu.classList.toggle("show")
    if (polozkyMenu.classList.contains("show")) {
        const ikonkaMenu = document.querySelector(".fas")
        ikonkaMenu.className = "fas fa-xmark"
    } else {
        const ikonkaMenu = document.querySelector(".fas")
        ikonkaMenu.className = "fas fa-bars"
    }
})
