const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const base = document.getElementById("base");
const img = document.querySelector("img");

blur.addEventListener('mousemove', () => {
    img.style.filter = `blur(${blur.value}px)`;
})
spacing.addEventListener('mousemove', () => {
    img.style.padding = `${spacing.value}px`;
})
base.addEventListener('change', () => {
    img.style.backgroundColor = `${base.value}`;
})