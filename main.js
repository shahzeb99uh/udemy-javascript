const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const imageGroup = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const imageAlt = ["Close up of an eye", "Arial of a dune", "Multishaded flowers", "History of Egypt", "Butterfly on a Leave"];

/* Looping through images */
for(let i = 0; i < imageGroup.length; i ++) {
    thumbBar.innerHTML += (`<img src="images/${imageGroup[i]}" alt="${imageAlt[i]}"></img>`)
}

/* Events and functions */

thumbBar.addEventListener("click", (event)=>{
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
})

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", ()=>{
    if(btn.innerText === "Darken") {
        overlay.style.backgroundColor = "rgba(0,0,0,.5)";
        btn.innerText = "Lighten";
    } else {
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        btn.innerText = "Darken";
    }
});
