//7oti el 6 images fe array 3shan n3mel side show
var images = [
    '/images/terex12-cat-7182671_1920.jpg',
    '/images/nennieinszweidrei-cat-7094808_1920.jpg',
    '/images/jscreativelab-simba-8618301_1920.jpg',
    '/images/daga_roszkowska-cat-3059075_1920.jpg',
    '/imgaes/artellliii72-cats-8105667_1920.jpg',
    '/images/alexas_fotos-cat-1044750_1920.jpg'
];

var currentIndex = 0;
var slideshowInterval = null;//lesa ma7dedsh el wa2t
var isSlideshowRunning = false;

var displayImage = document.getElementById('displayImage');
var imageCounter = document.getElementById('imageCounter');//by3ed ana fe anfi 3shan y3ref
var slideshowBtn = document.getElementById('slideshowBtn');//zorz el sliude show

//by3ed ana feen 
function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    } else {
        alert('you are at the last image');// 3shen low dost next w ana fe el 2a5era
    }
}

function previousImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    } else {
        alert('You are at the first image');
    }
}


function updateImage() {
    displayImage.src = images[currentIndex];
    imageCounter.textContent = (currentIndex + 1) + ' / ' + images.length;
}

//zorar el slideshow
function toggleSlideshow() {
    if (isSlideshowRunning) {
        stopSlideshow();
    } else {
        startSlideshow();
    }
}


function startSlideshow() {
    if (isSlideshowRunning) return;
    
    isSlideshowRunning = true;
    slideshowBtn.textContent = 'Pause';
    
    slideshowInterval = setInterval(function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateImage();
    }, 3000); //3 seconds 
}

function stopSlideshow() {
    if (slideshowInterval !== null) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
    isSlideshowRunning = false;
    slideshowBtn.textContent = 'Slideshow';
}

updateImage();