
const changeThemeBtn = document.querySelector("#toggle-btn-1")

changeThemeBtn.addEventListener("change", function () {
    document.body.classList.toggle("dark");
})