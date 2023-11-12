const headerMenu = document.querySelector("#header-menu");
const navbarMenu = document.querySelector("#navbar-menu");

const prevArrow = document.querySelector(".s2__step--prev");
const nextArrow = document.querySelector(".s2__step--next");
const slide = document.querySelector(".s2__step-wrap");
const points = document.querySelectorAll(".s2__step-dot");

const style = {
    hide: "hidden",
    show: "auto"
}

// Navbar
const toggleHeader = () => {
    if (navbarMenu.classList.contains("open")) {
        document.body.style.setProperty("overflow", style.show);
    } else {
        document.body.style.setProperty("overflow", style.hide);
    }
    navbarMenu.classList.toggle("open");
    headerMenu.classList.toggle("open");
}

headerMenu.addEventListener("click", () => toggleHeader());

// Slider
let count = 0, n = slide.length - 1;

const handleSwiper = (e) => {
    const type = e.target.dataset.type;
    if (type === "prev") {
        if (count <= 0) { return };
        count = count - 1;
        handleToggle(count);
        slide.style.transform = `translateX(-${count * 100}%)`;
    } else {
        if (count >= 9) { return };
        count = count + 1;
        handleToggle(count);
        slide.style.transform = `translateX(-${count * 100}%)`;
    }
}

const handleToggle = (e) => {
    points.forEach(point => {
        point.style.backgroundColor = "transparent";
    });
    points[e].style.backgroundColor = "#6200EE";
}

const handleChange = (e) => {
    const elem = e.target;
    points.forEach(point => {
        point.style.backgroundColor = "transparent";
    });
    count = parseInt(elem.href.slice(-2)) - 1;
    elem.style.backgroundColor = "#6200EE";
}

prevArrow.addEventListener("click", (e) => handleSwiper(e));
nextArrow.addEventListener("click", (e) => handleSwiper(e));

document.querySelectorAll(".s2__step-dot").forEach(point => {
    point.addEventListener("click", (e) => handleChange(e));
});
