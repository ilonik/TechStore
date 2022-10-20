// function init () {
//   if (localStorage.getItem("cart"))
//   (JSON.parse(localStorage.getItem("cart")))

// }



var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
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
  // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
// function addProductsToWebpage() {
//   const placeholder = document.querySelector("#product-output");
//   let output = "";
//   for (let product of listOfProducts) {
//     output += `    
//             <div class="products">
//                <h1>${product.title}</h1>
//                <p>${product.description}</p>
//                <img src='assets/${product.image}'</img>
//                <span>${product.price} kr </span>
//                <div class="addToBasket">
//                <button class="addToBasketBtn"><i class="fa-solid fa-cart-arrow-down"></i>Lägg till i kundvagnen </button>
//                </div>
//             </div>
//          `;
//   }


//   placeholder.innerHTML = output; 
// }
 
const main = document.querySelector("main")
function addProductsToWebpage() {
  let output
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


const myArray = []
// make local storage stay when refreshing. OBS VERKAR INTE FYLLA NÅGON FUNKTION ÄNDÅ?
if (!localStorage.getItem("cart")) { 

  localStorage.setItem("cart", JSON.stringify(myArray))  
  }


//localStorage.setItem("cart", JSON.stringify(myArray)))
function test (e){
  const product = listOfProducts [e.id];

  const listfromstorage = JSON.parse(localStorage.getItem("cart"))
  //get LS
  listfromstorage.push(product)
  //send back to ls
  localStorage.setItem("cart", JSON.stringify(listfromstorage))
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

