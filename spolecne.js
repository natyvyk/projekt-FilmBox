/*
//slozite, ale prehledne
const tlacitkoMenu = document.querySelector("#menu-tlacitko")
const ukazMenu = () => {
    const polozkyMenu = document.querySelector("#menu-polozky")
    polozkyMenu.classList.toggle("show")
}
tlacitkoMenu.addEventListener("click", ukazMenu)
*/

//zjednodusena verze
document.querySelector("#menu-tlacitko").addEventListener("click", () => {
    const polozkyMenu = document.querySelector("#menu-polozky")
    polozkyMenu.classList.toggle("show")
    if (polozkyMenu.classList.contains("show")) {
        const rozbaleneMenu = document.querySelector(".fas")
        rozbaleneMenu.className = "fas fa-xmark"
    } else {
        const rozbaleneMenu = document.querySelector(".fas")
        rozbaleneMenu.className = "fas fa-bars"
    }
})
