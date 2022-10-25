var listOfProducts;

function loadProducts() {
  fetch("./products.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (products) {
      listOfProducts = products;
      addProductsToWebpage();
      //myArray = JSON.parse(localStorage.getItem("cart"));
    });
}

function initSite() {
  loadProducts();
}

function inBasketSite() {
  showCart();
  printlength();
  //totalPrice();
  buybtn.addEventListener("click", () => {
    //printlength();
    localStorage.clear();
    showCart();
    printlength();
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

//let myArray = [];

// if (!localStorage.getItem("cart")) {
//   localStorage.setItem("cart", JSON.stringify(myArray));
// }

function test(e) {
  // let listfromstorage;
  const product = listOfProducts[e.id];
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([product]));
  } else {
    const listfromstorage = JSON.parse(localStorage.getItem("cart"));
    listfromstorage.push(product);
    localStorage.setItem("cart", JSON.stringify(listfromstorage));
  }
  //myArray.push(product);

  //get LS
  //listfromstorage.push(product);
  // myArray.push(product);
  //console.log(listfromstorage);
  //send back to ls
  //localStorage.setItem("cart", JSON.stringify(listfromstorage));

  // var count = document.querySelector(".count");
  // count.innerHTML = listfromstorage.length;
  printlength();
}

let basketOutPut = document.querySelector("#basket-output");
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
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <img src='assets/${product.image}'</img>
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
  //const product = myArray[e.id];
  //console.log(product)

  //nedan lyste men dne behöver vi ju  ej
  const listfromstorage = JSON.parse(localStorage.getItem("cart"));
  listfromstorage.splice(e, 1);
  localStorage.setItem("cart", JSON.stringify(listfromstorage));
  //localStorage.setItem("cart", JSON.stringify(myArray));
  //myArray = JSON.parse(localStorage.getItem("cart"));

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
  buybtn.innerHTML = "Genomför köpet";
  basketOutPut.appendChild(buybtn);
}
//**CompletePurchase function End **/
const TotalPrice = document.querySelector(".totalPrice");

//**totalPrice function Starts**/
function totalPrice() {
  let sum = JSON.parse(localStorage.getItem("cart")).reduce(function (
    prev,
    next
  ) {
    return prev + next.price;
  },
  0);
  TotalPrice.innerText = sum + " kr";

  basketOutPut.appendChild(TotalPrice);
}

//**totalPrice function Ends**/

//load cart product
// function mycount() {
//   //let prdcount = getprdcountfromstorage();
//   if (product.length < 1) {
//     prdcount = 1;
//   } else {
//     prdcount = product[peoducts.length - 1].id;
//     prdcount++;
//   }

// }
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
