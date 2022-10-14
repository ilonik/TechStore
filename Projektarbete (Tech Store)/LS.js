 //OM MAN KLICKAR PÅ LÄGG TILL I KUNDVAGNEN SKA DETTA SKE
 const addToCart = document.querySelector(".addToBasketBtn")



 addToCart.addEventListener("click", function () {
     //hämtar hem LS
     const listFromStorage = JSON.parse(localStorage.getItem("shoppingCartList"))
     //lägger till i LS
     listFromStorage.push
     //Skickar in tillbaka i LS
     localStorage.setItem("shoppingCartList", JSON.stringify(listFromStorage))

 })




 const myArray = [
     {
         "title": "iPhone X",
         "description": "Last years phone from Apple with a beautiful all display front.",
         "image": "iPhoneX.png",
         "price": 11495
     }, {
         "title": "One Plus 5",
         "description": "Sleek and powerful smartphone from One Plus.",
         "image": "OnePlus5.png",
         "price": 4995
     }, {
         "title": "Galaxy S8",
         "description": "Really cool edge to edge smartphone from Samsung.",
         "image": "SamsungS8.png",
         "price": 7990
     }, {
         "title": "LG V30",
         "description": "Super nice and beautiful smartphone from LG.",
         "image": "LGV30.png",
         "price": 7495
     }
 ]



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