var stopSlideshow = false;
var interval;

function slideshow(button) {
    if (button.value === "Start Slideshow") {
        stopSlideshow = false;
        button.value = "Stop Slideshow";
        button.classList.remove("btn-success");
        button.classList.add("btn-danger");
        interval = setInterval(function () {
            if (!stopSlideshow) {
                changeSlide('next');
            } else {
                clearInterval(interval);
            }
        }, 2000);
    } else {
        stopSlideshow = true;
        button.value = "Start Slideshow";
        button.classList.remove("btn-danger");
        button.classList.add("btn-success");
        clearInterval(interval);
    }
}

function changeSlide(direction) {
    var currentImg = document.querySelector('.slider img.active');
    var nextImg = currentImg.nextElementSibling;
    var prevImg = currentImg.previousElementSibling;

    currentImg.classList.remove('active');
    if (direction === 'next') {
        if (nextImg) {
            nextImg.classList.add('active');
        } else {
            document.querySelector('.slider img').classList.add('active');
        }
    } else {
        if (prevImg) {
            prevImg.classList.add('active');
        } else {
            document.querySelector('.slider img:last-of-type').classList.add('active');
        }
    }
}
