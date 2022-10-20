showCart();

function showCart() {
  let basketOutPut = document.querySelector("#basket-output");

  myArray = JSON.parse(localStorage.getItem("cart"));

  let output;
  for (const product of myArray) {
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
