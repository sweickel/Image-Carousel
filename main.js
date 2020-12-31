let activeSlide = 2;
let slideArr = [];
let bubArr = [];

//clears bubbles on bottom and clears img from carousel
function clearSlides(el) {
    slideArr.forEach(el => {        
        el.classList.remove("active");
    })

    bubArr.forEach(el => {
        el.classList.remove("bubble_active");
    })
} 

//advances to next slide and shows bubble on active img
function next() {
    clearSlides();
    if (activeSlide >= slideArr.length -1) {        
        activeSlide = 0;      
    }
        else {
            activeSlide++;                           
        }
        slideArr[activeSlide].classList.add('active');        
        bubArr[activeSlide].classList.add("bubble_active");
}

//returns to previous slide and shows bubble on active img
function last() {
    clearSlides();
    if (activeSlide <= 0) {
        activeSlide = slideArr.length -1;
    }
        else {
            activeSlide--            
        }
        slideArr[activeSlide].classList.add('active');
        bubArr[activeSlide].classList.add("bubble_active");
}

function setListeners() {
    document.getElementById("arrowright").addEventListener("click", (event) => {
        next();
    });

    document.getElementById("arrowleft").addEventListener("click", (event) => {
        last();
    });

    document.getElementById("bubble1").addEventListener("click", (event) => {
        activeSlide = slideArr.length-1;
        next();
    });
    document.getElementById("bubble2").addEventListener("click", (event) => {
        activeSlide = 0;
        next();
    });
    document.getElementById("bubble3").addEventListener("click", (event) => {
        activeSlide = 1;
        next();
    });
}


window.addEventListener("load", (event) => {
    slideArr = document.querySelectorAll("div.slide");
    bubArr = document.querySelectorAll("button.bubble");
    next();
    setListeners();
});


