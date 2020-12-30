console.log("app started");


let activeSlide = 0;
let slideArr = [];

function next() {
    console.log("button works");
    if (activeSlide >= slideArr.length -1) {
        activeSlide = 0;
        slideArr[slideArr.length - 1].classList.remove("active");
        slideArr[activeSlide].classList.add('active');
    }
        else {
            activeSlide++
            slideArr[activeSlide].classList.add("active");
            slideArr[activeSlide-1].classList.remove("active");                   
        }
}

function last() {
    console.log("button works");
    if (activeSlide <= 0) {
        activeSlide = slideArr.length -1;
        slideArr[0].classList.remove("active");
        slideArr[activeSlide].classList.add('active');
    }
        else {
            activeSlide--
            slideArr[activeSlide].classList.add("active");
            slideArr[activeSlide+1].classList.remove("active");
                   
        }
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
    next();
    console.log(slideArr);
    setListeners();
});