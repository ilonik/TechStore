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
  let html
  let id = 0;
  for (const product of listOfProducts) {
    html = `
      <div class="products_container">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <img src=/assets/${product.image}">
      <p>${product.price} kr</p>
      <button id=${id} onclick="test(this)">Add to cart </button>
      </div>
         `;

         id++;
         main.insertAdjacentHTML("beforeEnd", html);
  }
  
  localStorage.setItem("myList", JSON.stringify(myArray))
}
const myArray =[]
function test (e){
  const product = listOfProducts [e.id];
  //console.log(product)

  const listfromstorage = json.parse(localstorage.getitem("cart"))
  //lägger till i ls
  console.log(listfromstorage.push(product))
  //skickar in tillbaka i ls
  localstorage.setitem("cart", json.stringify(listfromstorage))
}




  //placeholder.innerHTML = output;   
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

