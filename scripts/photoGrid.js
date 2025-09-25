// Define folder and image files
const folder = "/images/ecuador/";
const images = [
    "IMG_7407.jpg",
    "IMG_7614-2.jpg",
    "IMG_7488.jpg",
    "IMG_7251.jpg",
    "IMG_7198.jpg",
];

// Grab the gallery container
const gallery = document.getElementById("gallery");

// Dynamically create <img> elements
images.forEach(img => {
  const imgElement = document.createElement("img");
  imgElement.src = `${folder}${img}`;
  imgElement.alt = img;
  gallery.appendChild(imgElement);
});