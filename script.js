const hambgr = document.querySelector(".linecont");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const navList = document.querySelector("nav ul");

hambgr.addEventListener("click", () => {
    line1.classList.toggle("line1click");
    line2.classList.toggle("line2click");
    line3.classList.toggle("line3click");
    navList.classList.toggle("display");
});