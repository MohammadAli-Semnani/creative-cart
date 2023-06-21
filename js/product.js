let btnBack = document.querySelector(".btnBack");
let productImg = document.querySelector(".productImg");
btnBack.addEventListener("click", () => {
  history.back()
})

let locationSearch = location.search;
let userIdParams = new URLSearchParams(locationSearch);
let productId = userIdParams.get("id");

productImg.setAttribute("src", `images/${productId}.png`);
