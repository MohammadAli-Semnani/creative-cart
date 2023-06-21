// DOM => Document Object Model
// BOM => Browser Object Model
let productsArray = [
  {
    id: 1,
    name: "Best Shoes",
    describtion: "Lorem ipsum, or lipsum as it is sometimes known",
    img: "images/1.png",
    price: 90
  },
  {
    id: 2,
    name: "Best Shoes",
    describtion: "Lorem ipsum, or lipsum as it is sometimes known",
    img: "images/2.png",
    price: 20
  },
  {
    id: 3,
    name: "Best Shoes",
    describtion: "Lorem ipsum, or lipsum as it is sometimes known",
    img: "images/3.png",
    price: 60
  },
];

let containerDiv = document.querySelector(".container");

productsArray.forEach((product) => {
    containerDiv.insertAdjacentHTML(
      "afterbegin",
      `<div class="product-card">
        <h1>${product.name}</h1>
        <p>${product.describtion}</p>
        <div class="product-pic" style="background-image: url(${product.img});"></div>
        <div class="product-info">
          <div class="product-price">${product.price}$</div>
          <a href="product.html?id=${product.id}" class="product-button">See More</a>
        </div>
      </div>`,
    );
})
