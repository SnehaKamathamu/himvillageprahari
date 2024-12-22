

   //nav bar code 

let menuList = document.querySelector('.nav-links');
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

// Close the menu when any link is clicked
let links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        menuList.style.maxHeight = "0px"; // Close the menu
    });
});






const images = [
  '../img/village-cleaning-img.jpg',
  '../img/nature-image.jpg',
  '../Gallery/G3.jpg',
  '../Gallery/g5.jpg',
  '../img/beautiful-strawberry-garden-sunrise-doi-ang.jpg'
];


let currentIndex = 0;

function changeBackgroundImage() {
  const topElement = document.getElementById('top');
  
  // Add the fade-out effect
  topElement.classList.add('hidden');

  // Wait for the fade-out effect to complete, then change the image
  setTimeout(() => {
    topElement.style.backgroundImage = `url('${images[currentIndex]}')`;

    // Remove the fade-out class to trigger fade-in
    topElement.classList.remove('hidden');

    // Move to the next image in the array
    currentIndex = (currentIndex + 1) % images.length;
  }, 1000); // Matches the transition duration in CSS
}

// Change the image every 5 seconds
setInterval(changeBackgroundImage, 5000);

// Initialize the first background image
changeBackgroundImage();









let index = 0;
const slides = document.querySelectorAll('.slider .slide'); 
const totalSlides = slides.length; 

function updateSlider() {

  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  slides[index].style.display = 'block';
}

function nextSlide() {
  index = (index + 1) % totalSlides; 
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
}


document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);


setInterval(nextSlide, 2000);


updateSlider();







