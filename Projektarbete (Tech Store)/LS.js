 //OM MAN KLICKAR PÅ LÄGG TILL I KUNDVAGNEN SKA DETTA SKE
 const addToCartBtns = document.querySelectorAll(".addToCart")
console.log(addToCartBtns)

//  let cart = {};
//  if (localStorage.getItem("cart")){
//     cart = JSON.parse(localStorage.getItem("cart"))
//  }

for (const btn of addToCartBtns) {
    btn.addEventListener("click", function (e){
    const id = e.target.id
    console.log(id)
    })
    
}

function test (e){
    const id = e.target.id
    console.log(id)
  }

// addToCartBtns.addEventListener("click", function () {
//      //hämtar hem LS
//      const listFromStorage = JSON.parse(localStorage.getItem("cart"))
//      //lägger till i LS
//      listFromStorage.push('qweqe')
//      //Skickar in tillbaka i LS
//      localStorage.setItem("cart", JSON.stringify(listFromStorage))
    
//  })

// bheöver något sådant här typ (let i = 0; i < btns.length; i++) {



 //let cart = addItemsInCart


 //function addItemsInCart(){













 // //nej pusha direkt ill local storage
 // localStorage.setItem("shoppingCartList", JSON.stringify(listOfProducts))

 // //Produkterna i kundvagnen från localStorage
 // const shoppingCart = JSON.parse(localStorage.getItem("shoppingCartList"))

 // //console.log(shoppingCart)

 // const text = document.querySelector("p")




 // const output = document.querySelector(".output")
 // const url = "products.json"
 // window.addEventListener("DOMContentLoaded",()=>{
 //     output.textContent = "ready";
 //     loadData();

 // })

 // function loadData(){
 //     fetch(url).then(rep.json())
 //     .then((data)=>{
 //         console.log(data.title)

 // })
 // }