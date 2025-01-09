

// document.addEventListener('DOMContentLoaded', function () {
//     const filterList = document.querySelectorAll('#filter-list li');
//     const galleryItems = document.querySelectorAll('.gallery-items li');

//     filterList.forEach(filter => {
//         filter.addEventListener('click', function () {
//             // Remove 'active' class from all filters
//             filterList.forEach(item => item.classList.remove('active'));
            

//             // Add 'active' class to the clicked filter
//             this.classList.add('active');

//             // Get the filter category from 'data-filter'
//             const filterCategory = this.getAttribute('data-filter');

//             // Show/hide gallery items based on the filter category
//             galleryItems.forEach(item => {

              
//                 if (filterCategory === 'all' || item.getAttribute('data-category') === filterCategory) {
//                     item.style.display = 'block';
                 
//                 } else {
//                     item.style.display = 'none';
                  
//                 }
//             });
//         });
//     });
// });






const galleryItems = document.querySelector('.gallery-items');
const filterList = document.querySelectorAll('#filter-list .filter');

// Folder mapping
const folders = {
    all_cleanliness: ['./image/All cleanliness drive/1.jpg', './image/All cleanliness drive/2.jpg', './image/All cleanliness drive/3.jpg', './image/All cleanliness drive/4.jpg', './image/All cleanliness drive/5.jpg'],
    painting_competition: ['./image/painting competition/1.jpg', './image/painting competition/2.jpg', './image/painting competition/3.jpg', './image/painting competition/4.jpg', './image/painting competition/5.jpg', './image/painting competition/6.jpg'],
    waste_collection:['./image/Waste collection/6.jpg','./image/Waste collection/1.jpg','./image/Waste collection/2.jpg','./image/Waste collection/3.jpg','./image/Waste collection/4.jpg','./image/Waste collection/5.jpg',],
    seva_viste:['./image/seva viste/1.jpg','./image/seva viste/2.jpg','./image/seva viste/3.jpg','./image/seva viste/4.jpg','./image/seva viste/5.jpg','./image/seva viste/6.jpg' ]
};

// Function to load images dynamically
function loadGallery(category) {
    if(category=="others"){
        return;
    }
    galleryItems.innerHTML = ''; // Clear previous images
    if (folders[category]) {
        folders[category].forEach((image) => {
            const li = document.createElement('li');
            li.classList.add('filtr-item');
            li.innerHTML = `
                
                <div class="gallery-inner">
                <a class="visibleOnMax" href="${image}"></a>
                    <img src="${image}" alt="">
                    <div class="gallery-overlay">
                        <a href="${image}" class="venobox vbox-item" data-gall="gallery"><i class="fa-solid fa-image"></i></a>
                    </div>
               </div>`
                
            galleryItems.appendChild(li);
        });
    } else {
        galleryItems.innerHTML = '<p>No images found for this category🥹.</p>';
    }
}

// Add event listeners to filter buttons
filterList.forEach((filter) => {
    filter.addEventListener('click', () => {
        const category = filter.getAttribute('data-category');
        const currentActive = document.querySelector('.filter.active');
        
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        filter.classList.add('active');
        
        loadGallery(category);
    });
});

// Load initial category (or fallback)
loadGallery('all_cleanliness');




function updateCategory(selectElement) {
    const selectedCategory = selectElement.value;
    const liElement = selectElement.closest('li'); // Find the parent <li> element
    liElement.setAttribute('data-category', selectedCategory);
    loadGallery(selectedCategory); // Load images dynamically
}

// Function to handle LI click
document.querySelectorAll('.filter').forEach(li => {
    li.addEventListener('click', () => {
        const category = li.querySelector('select').value;
        loadGallery(category); // Load images dynamically
    });
});


