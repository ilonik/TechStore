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
function addProductsToWebpage() {
  const placeholder = document.querySelector("#product-output"); // hämtar min main från html filen
  let output = ""; //skapar en let för att jag skall kunna ändra på den senare, döper den till output för att den ska displayas på html, jag vänjer har en tom i nulägger.
  for (let product of listOfProducts) {
    //skapar en for of lop för att jag vill loopa igenom min array som finns på jSonfilen.
    output += `    
            <div class="products">
               <h1>${product.title}</h1>
               <p>${product.description}</p>
               <img><img src='assets/${product.image}'</img></img>
               <span>${product.price} kr </span>
               <button id=${product.title} class="addToCart" onclick="test()"><i class="fa-solid fa-cart-plus"></i>  Lägg till i kundvagnen </button>
            </div>
         `;
  }


  placeholder.innerHTML = output;   
  // Check your console to see that the products are stored in the listOfProducts varible.
  //console.log(listOfProducts);
}
  //POP-UP VID GENOMFÖRT KÖP. SKA VARA PÅ KUNDVAGNSSIDAN OOOOOBS DENNA ÄR BORTKOMMENDERAD TILLFÄLLIGT FÖR ATT SLIPPA FELMEDDELANDE!!!!!!!!!!!!!!!
//   const completeYouPurchase = document.querySelector(".completeYouPurchase");

//   completeYouPurchase.addEventListener("click", function () {
//     alert("Ditt köp är genomfört!");
//   });







  // Add your code here, remember to brake your code in to smaller function blocks
  // to reduce complexity and increase readability. Each function should have
  // an explainetory comment like the one for this function, see row 22.

  // TODO: Remove the console.log and these comments when you've read them.

