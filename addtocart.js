showCart();

function showCart() {
  let basketOutPut = document.querySelector("#basket-output");

  myArray = JSON.parse(localStorage.getItem("cart"));
  /*hämrar jag bara min array för att det är min array jag vill lopa igenom*/

  let output;
  for (const product of myArray) {
    /*här sätter jag in min egna array för att jag vill lopa den*/
    //localStorage.getItem("basketOutPut");
    output = `
      <div class="products">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <img src='assets/${product.image}'</img>
      <p>${product.price} kr</p>
      </div>
         `;
    console.log(output);
    basketOutPut.insertAdjacentHTML("beforeEnd", output);
  }

  //basketOutPut.innerHTML = output

  //basketOutPut.insertAdjacentHTML("beforeEnd", output);
}
