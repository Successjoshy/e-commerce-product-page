                        // incrementations

const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")
const order_amount = document.querySelector(".orders-p")

let increase= 0


increment.addEventListener("click",() =>{
    increase++
    order_amount.innerHTML= increase
})

decrement.addEventListener("click",() =>{
    increase--
    order_amount.innerHTML = increase
})
                        // incrementations


                            // cart

const catalogs = document.querySelector(".catalogs")
const cart = document.querySelector(".cart")


cart.addEventListener("mousedown",()=>{


    if(catalogs.style.display=="none"){

        catalogs.style.display="initial"
    
    } else{

        catalogs.style.display="none"

    }
    
})

                            // cart end


                            // small screen navigations
const menu_bar = document.querySelector(".menubar")
const navigations = document.querySelector("#navigations")
const close = document.querySelector("#close-icon")

menu_bar.addEventListener("click",()=>{

    if(navigations.style.marginLeft == "-500px"){

        navigations.style.marginLeft= "0"
        
    }

    else{
        navigations.style.marginLeft= "-500px"
    }
})

close.addEventListener("click",()=>{
    
    navigations.style.marginLeft= "-500px"
})

                            // small screen navigations

                            // add catalogs button

const bin = document.querySelector(".bin")

const empty = document.querySelector(".empty")
const div_ = document.querySelector(".div-to-append")
const catalogs_btn = document.querySelector(".catalogs-btn")
const orders_btn = document.querySelector(".orders-button")
let cart_increment = document.querySelector(".cart-available")



orders_btn.addEventListener("click", ()=>{

    const div = document.createElement("div")
    
    div.innerHTML =`
    <div class="catalogs-cart-items-container">
       
        <div class="catalogs-cart-items-image">
            <img  src="./E-comerce-product-page-images/image-product-1.jpg"  >
        </div>

        <div class="catalogs-cart-items-texts">
            <p>Fall LIimited Edition Sneakers</p>
            <p>$125.00  x </i>  3 <span class="catalogs-span"> $375.00</span></p>
            
        </div>
    </div>

        <h3 class="bin"><img src="./E-comerce-product-page-images/icon-delete.svg" id="deleteElement"></h3>

        <div class="catalog-btn">
            <button class="catalogs-btn">checkout</button>
        </div> 
    </div>
`
    div_.append(div)
    cart_increment.innerHTML++

    empty.style.display="none"
 

    const delel = document.getElementById("deleteElement")


    delel.addEventListener("click",()=>{

        div.remove()

        empty.style.display="block"

        cart_increment.innerHTML--

    })

   
})





                            // add catalogs button

