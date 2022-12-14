var listOfProducts;
const basketOutPut = document.querySelector("#basket-output");

function loadProducts() {
  fetch("./products.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (products) {
      listOfProducts = products;
      addProductsToWebpage();
    });
}

function initSite() {
  loadProducts();
  printlength();
}

function inBasketSite() {
  showCart();
  printlength();

  buybtn.addEventListener("click", () => {
    localStorage.clear();
    showCart();
    printlength();
    window.location.href = "completed-Purchase.html";
  });
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

function test(e) {
  const product = listOfProducts[e.id];
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([product]));
  } else {
    const listfromstorage = JSON.parse(localStorage.getItem("cart"));
    listfromstorage.push(product);
    localStorage.setItem("cart", JSON.stringify(listfromstorage));
  }

  printlength();
}

function showCart() {
  if (!localStorage.getItem("cart")) {
    return;
  }
  basketOutPut.innerHTML = " ";
  let id = 0;
  const products = JSON.parse(localStorage.getItem("cart"));
  let output;
  for (const product of products) {
    output = `
    <div class="Cart-products">
    
  
    <img src='assets/${product.image}'</img>
    <h2>${product.title}</h2>
    <p class="description">${product.description}</p>
    <p>${product.price} kr</p>
    <button class="removeBtn" id=${id} onclick="testRemove(${id})"><i class="fa-regular fa-trash-can"></i>Ta bort </button>
      </div>
      
    </div>
    
      `;
    id++;

    basketOutPut.insertAdjacentHTML("beforeend", output);
  }
  totalPrice();
  completePurchase();
}

function testRemove(e) {
  const listfromstorage = JSON.parse(localStorage.getItem("cart"));
  listfromstorage.splice(e, 1);
  localStorage.setItem("cart", JSON.stringify(listfromstorage));

  showCart();
  printlength();
}

function printlength() {
  var count = document.querySelector(".count");
  if (!localStorage.getItem("cart")) {
    count.innerHTML = " ";
  } else {
    const listfromstorage = JSON.parse(localStorage.getItem("cart"));

    count.innerHTML = listfromstorage.length;
  }
}

//**completePurchase funtion starts**/
const buybtn = document.createElement("button");
buybtn.classList.add("completeYourPurchaseBtn");

function completePurchase() {
  let Check = `<i class="fa-solid fa-check"></i>
`;
  buybtn.innerHTML = Check + " Slutför ditt köp";
  basketOutPut.appendChild(buybtn);
}
//**CompletePurchase function End **/

//**totalPrice function Starts***/
const TotalPrice = document.querySelector(".totalPrice");

function totalPrice() {
  let sum = JSON.parse(localStorage.getItem("cart")).reduce(function (
    prev,
    next
  ) {
    return prev + next.price;
  },
  0);
  TotalPrice.innerText = "Totalt pris: " + sum + " kr";

  basketOutPut.appendChild(TotalPrice);
}

//**totalPrice function Ends**/
