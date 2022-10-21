var listOfProducts;

function loadProducts() {
  fetch("./products.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (products) {
      listOfProducts = products;
      addProductsToWebpage();
      myArray = JSON.parse(localStorage.getItem("cart"));
    });
}

function initSite() {
  loadProducts();
}

const main = document.querySelector("main");

function addProductsToWebpage() {
  let output;
  let id = 0;
  for (const product of listOfProducts) {
    output = `
      <div class="products">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <img src='assets/${product.image}'</img>
      <p>${product.price} kr</p>
      
      <button class="addToBasketBtn" id=${id} onclick="test(this)"><i class="fa-solid fa-cart-arrow-down"></i>Lägg till i kundvagnen</button>
      </div>
         `;

    id++;
    main.insertAdjacentHTML("beforeEnd", output);
  }
}

let myArray = [];

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify(myArray));
}

function test(e) {
  const product = listOfProducts[e.id];

  myArray.push(product);

  localStorage.setItem("cart", JSON.stringify(myArray));
}

function inBasketSite() {
  showCart();
}

function showCart() {
  let basketOutPut = document.querySelector("#basket-output");

  myArray = JSON.parse(localStorage.getItem("cart"));
  let output;
  for (const product of myArray) {
    output = `
      <div class="Cart-products">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <img src='assets/${product.image}'</img>
      <p>${product.price} kr</p>
      </div>
         `;

    basketOutPut.insertAdjacentHTML("beforeEnd", output);
  }
}

// Check your console to see that the products are stored in the listOfProducts varible.
//console.log(listOfProducts);

//POP-UP VID GENOMFÖRT KÖP. SKA VARA PÅ KUNDVAGNSSIDAN OOOOOBS DENNA ÄR BORTKOMMENDERAD TILLFÄLLIGT FÖR ATT SLIPPA FELMEDDELANDE!!!!!!!!!!!!!!!
//   const completeYouPurchase = document.querySelector(".completeYouPurchase");

//   completeYouPurchase.addEventListener("click", function () {
//     alert("Ditt köp är genomfört!");
//   });

// Add your code here, remember to brake your code in to smaller function blocks
// to reduce complexity and increase readability. Each function should have
// an explainetory comment like the one for this function, see row 22.

// TODO: Remove the console.log and these comments when you've read them.
