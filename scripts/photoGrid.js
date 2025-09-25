// Define folder and image files
const folder = "/anything-but-the-norm/images/ecuador/";
const images = [
    "IMG_7407.jpg",
    "IMG_7614-2.jpg",
    "1BAAAEA2-9B61-429D-9585-346BB1B44C03_1_105_c.jpeg",
    "60DC2985-757C-4DA8-935D-6679E03F44D7_1_105_c.jpeg",
    "IMG_7488.jpg",
    "IMG_7251.jpg",
    "IMG_7198.jpg",
    "0F797E98-EEB9-45BD-AE8D-F4C7964056C0_1_105_c.jpeg",
    "60ECB987-D505-4A95-A814-613D7D0E1E34_1_105_c.jpeg",
    "DFA27588-FA74-4711-A2E3-60FA96ACFBC5_1_102_o.jpeg",
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