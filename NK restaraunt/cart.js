let ArrProducts=[
    {
        id:1,
        name:"CarbonaraPasta",
        image:"CarbonaraPasta.png",
        price:"500",
    },
    {
        id:2,
        name:"Pasta",
        image:"pasta.png",
        price:"300",
    },
    {
        id:3,
        name:"Bolognese Sauce Pasta",
        image:"bolognese sauce pasta.png",
        price:"600",
    },
    {
        id:4,
        name:"Lasagne",
        image:"lasagne.png",
        price:"650",
    },
    {
        id:5,
        name:"Pasta Ravioli",
        image:"pasta ravioli.png",
        price:"680",
    }
]

const body=document.querySelector("body");
 products=document.querySelector('.products');
 shoppingBasket=document.querySelector(".shoppingBasket");
closeCart=document.querySelector(".close");
productList=document.querySelector(".productsList");
quantity=document.querySelector(".quantity");


let checkOutList=[];

shoppingBasket.onclick=()=>{
    body.classList.add("active");
};

closeCart.onclick=()=>{
    body.classList.remove("active");
}

function onInIt(){
    ArrProducts.forEach((item,key)=>{

     let div=document.createElement("div");
     div.classList.add("item");

     div.innerHTML=`
     <img  class="img" src="asserts/${item.image}"/>
     <div class="name">${item.name}</div>
     <div class="price"><small>$</small>${item.price}</div>
     <button class=btn onclick="AddToCart(${key})">AddToCart</button>
     `;
     products.appendChild(div);
    });
}
onInIt();

 function AddToCart(id){
    if(checkOutList[id]==null){
        checkOutList[id]=ArrProducts[id];
        checkOutList[id].quantity=1;
    }
    else{
        checkOutList[id]=quantity+=1;
    }
    reloadCart();
 }

 function reloadCart(){
    productList.innerHTML="";

    let count=0;
    let totalPrice=0;

    checkOutList.forEach((item,key)=>{
        totalPrice+=parseInt(item.price*item.quantity);
        count+=item.quantity;
        let li=document.createElement("li");
        li.innerHTML=`
       <img src="asserts/${item.image}"/>
        <div>${item.name}</div>
        <div>${item.price}</div>
        <div>
            <button onclick="changeQuantity(${key},${item.quantity+1})">+</button>
            <div class="count">${item.quantity}</div>
            <button onclick="changeQuantity(${key},${item.quantity-1})">-</button>
        ` ;

        
        productList.appendChild(li);
    });
    quantity.innerHTML=count;
 }
    
function changeQuantity(key,quantity){
    if(quantity==0){
        delete checkOutList[key];
    }
    else{
        checkOutList[key].quantity=quantity;
    }
    reloadCart();
}
