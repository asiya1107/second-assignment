const thumbnailContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");

const images = [
  {
    src: "https://eleftheriacheese.com/wp-content/uploads/2022/11/eleftheria-cheese-home-category.jpg.webp",
    alt: "Cheese with oil dripped onto it",
  },
  {
    src: "https://www.cheese.com/media/img/cheese/parmesan_on_wooden_surface.jpg",
    alt: "Grated hard cheese on wooden block",
  },
  {
    src: "https://cheesemaking.com/cdn/shop/products/pic10.jpg?v=1529434190&width=2048",
    alt: "Blocks of cheddar cheese",
  },
  {
    src: "https://thelaughingcow-sea.com/wp-content/uploads/2023/07/shutterstock_2019563003_resized.webp",
    alt: "A variety of cheese and some grapes",
  },
  {
    src: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MjAzNTU4NzY3Njk5MDg5/assorted-types-of-cheese.jpg",
    alt: "Another variety of cheese and some grapes",
  },
];

let currentIndex = 0;

function updateDisplayImage(index) {
  displayImage.src = images[index].src;
  displayImage.alt = images[index].alt;
}

function updateFocus(index) {
  const thumbnails = thumbnailContainer.querySelectorAll("img");
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("focused", i === index);
  });
}

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");

  img.src = images[i].src;
  img.alt = images[i].alt;
  img.style.width = "70px";
  img.style.height = "70px";
  img.tabIndex = 0;

  img.addEventListener("click", function () {
    currentIndex = i;
    updateDisplayImage(i);
    updateFocus(i);
  });

  img.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      currentIndex = i;
      updateDisplayImage(i);
      updateFocus(i);
    }
  });

  thumbnailContainer.appendChild(img);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    updateDisplayImage(currentIndex);
    updateFocus(currentIndex);
    thumbnailContainer.children[currentIndex].focus();
  } else if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateDisplayImage(currentIndex);
    updateFocus(currentIndex);
    thumbnailContainer.children[currentIndex].focus();
  }
});

thumbnailContainer.firstElementChild.click();
thumbnailContainer.firstElementChild.focus();
