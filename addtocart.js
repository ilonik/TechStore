//const cartIcon = document.querySelector(".shoppingcart")
//cartIcon.addEventListener("click", showCart)
//denna vill fredrik vi ej ska använda. bara för det är en event coh en knapp så blir det dubbelt

//gör en ny js fil för kundvagnssidan annars måste man hålla på med location objektet och det är asjobbigt.



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