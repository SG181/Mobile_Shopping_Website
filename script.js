const product = [
    {
        id: 0,
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-1.jpg',
        title: 'Samsung Galaxy S20',
        price: 34999,
    },
    {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzx4JaxBosG65z6gkF9HoPcLFVtTCKIrWSAbjcRxhkejiUVeuDXodSGX6oF-wpbZuPrYg&usqp=CAU',
        title: 'Apple IPAD Mini',
        price: 64900,
    },
    {
        id: 2,
        image: 'https://www.reliancedigital.in/medias/OPPO-Mobile-Phone-493838343-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2ODM4N3xpbWFnZS9qcGVnfGltYWdlcy9oMWQvaGVmLzEwMDE4NzY5MjcyODYyLmpwZ3w1ZDBkNmRiYWYxYTZiMWIxZjBkNTMwYzVjMGFlYzczN2JjMGU3MTExNDYxMGFhODA2ZjUwMDgzZmRiZGE4OGFi',
        title: 'Oppo Reno 10',
        price: 35990,
    },
    {
        id: 3,
        image: 'https://www.hihonor.com/content/dam/honor/common/product-list/product-series/honor-magic-v2/honor-magic-2-purple.png',
        title: 'Honor Magic V2',
        price: 182271,
    },
    {
        id: 4,
        image: 'https://static.digit.in/default/oneplus-11-5g-0c644b10f4.jpeg',
        title: 'OnePlus 11',
        price: 54999,
    },
    {
        id: 5,
        image: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1630388591.60742471!400x400!85.jpg',
        title: 'Redmi Note 10 Pro Max',
        price: 19999,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>&#8377 ${price.toLocaleString('en-In')}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs. "+0;
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rs. "+total.toLocaleString('en-In');
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>&#8377 ${price.toLocaleString('en-In')}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement(" +(j++) +")'></i></div>"
            );
        }).join('');
    }  
}