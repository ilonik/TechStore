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
    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);





    //POP-UP VID GENOMFÖRT KÖP SKA VARA PÅ KUNDVAGNSSIDAN
    const completeYouPurchase = document.querySelector(".completeYouPurchase")

    completeYouPurchase.addEventListener("click", function () {
        alert("Ditt köp är genomfört!")
    })

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

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.

    // TODO: Remove the console.log and these comments when you've read them.
}