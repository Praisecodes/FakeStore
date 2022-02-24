const products = document.querySelector(".products");
// Test Fetch API Method

var alertStuff;

fetch("https://fakestoreapi.com/products")
.then((res)=> res.json())
.then((data)=>{
    data.forEach((product) => {
        const {id, image, title, category, price, rating} = product;

        const shortTitle = title.length > 20 ? title.substring(0, 20) + "..." : title;
        let nairaPrice = price * 415;
        nairaPrice = Math.round(nairaPrice);

        let rateArr = [];
        for(var i=0; i<Math.round(rating.rate);i++){
            rateArr.push("⭐");
        }
        const formattedRating = rateArr.join("");

        const productData = `<div class="product" id="data${id}" title="${title}">
                                <img src="${image}" alt="">
                                <h4>${shortTitle}</h4>
                                <p>N${nairaPrice}<br/>${formattedRating}</p>
                                <i class="far fa-heart"></i>
                            </div>`;

        products.innerHTML += productData;
         
    });
});