//const addcart = document.querySelector(".addcart");




//for (var i = 0; i < addcart.clientHeight; i++) {
//    addcart[i];.addEventListener("click, ()=>"{
        
  //      cartcount();
    //    })
    //console.log(addcart);

//}

//function cartcount(){
//let prdcount = localStorage.getItem("cartscount");
  //  localStorage.setItem("ccartscount, 1");

//}
//












//const cartIcon = document.querySelector(".shoppingcart")
//cartIcon.addEventListener("click", showCart)
//denna vill fredrik vi ej ska använda. bara för det är en event coh en knapp så blir det dubbelt

//gör en ny js fil för kundvagnssidan annars måste man hålla på med location objektet och det är asjobbigt.


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
  showCart();
  // This would also be a good place to initialize other parts of the UI
}






function showCart() {
  console.log("showCart")
  //skapar en section-tag här!
  // const sectionShoppingCart = document.createElement("section")
  // const body = document.querySelector("body")
  // body.appendChild(sectionShoppingCart)
  const basketOutput = document.querySelector("basket-output")

  const listfromstorage = JSON.parse(localStorage.getItem("cart"))
  let output
  for (const product of listfromstorage) {
    output = `
      <div class="products">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <img src='assets/${product.image}'</img>
      <p>${product.price} kr</p>
      </div>
         `;

  }
  console.log(myArray)
  basketOutput.insertAdjacentHTML("beforeEnd", output);
  //basketOutput.innerHTML = output;   
}