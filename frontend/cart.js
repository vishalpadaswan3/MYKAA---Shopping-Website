const appendcartitem = document.getElementById("appendcartitem")
let sam = JSON.parse(localStorage.getItem("buy"))
let appendcartitemhead = document.getElementById("appendcartitemhead")

appendcartitemhead.innerText = "Total Item :- " + sam.length
console.log(sam)

let cartdata = sam.map(item => {
    return {
        title: item.title.substring(0, 20),
        category: item.category,
        color: item.color,
        discount: item.discount,
        gender: item.gender,
        image1: item.image1,
        image2: item.image2,
        packsize: item.packsize,
        price: item.price,
        rating: item.rating,
        type: item.type,
        id: item._id
    }
})
render(cartdata)


function render(cartdata) {
    let cartlist = `
                ${cartdata.map(item => getcards(item.title, item.category, item.color, item.discount, item.gender, item.image1, item.image2, item.packsize, item.price, item.rating, item.type)).join(" ")}
            `
    appendcartitem.innerHTML = cartlist

    let totalprice = document.getElementById("vpvp44")
    let sum = 0;
    for (let i = 0; i < sam.length; i++) {
        sum += ((sam[i].price * sam[i].discount) / 100)
    }
    totalprice.innerText = sum + 1000 + 500 + 560

    let coupon = document.getElementById("samsamsam")
    // ----------------------------------------------------------------take care 

    let plus = document.getElementsByClassName("samcartafter1")
    let minus = document.getElementsByClassName("samcartafter2")
    let cal = document.getElementsByClassName("samparaafter")

    let remove = document.getElementsByClassName("removeitemcart")
    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", () => {
            sam.splice(i, 1)
            localStorage.setItem("buy", JSON.stringify(sam))
            window.location.reload();
        })
    }

    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener("click", () => {
            cal[i].innerText++
            totalprice.innerText = +totalprice.innerText + ((sam[i].price * sam[i].discount) / 100)
        })
    }

    for (let i = 0; i < minus.length; i++) {
        minus[i].addEventListener("click", () => {
            cal[i].innerText--
            totalprice.innerText = +totalprice.innerText - ((sam[i].price * sam[i].discount) / 100)
        })
    }

    let checkout = document.getElementById("checkoutpara")
    let c = 0;
    checkout.addEventListener("click", () => {
        console.log(totalprice.innerText)
        if (coupon.value != "") {
            if (coupon.value == "J85AC43" && c===0) {
                alert("coupoun added successfully")
                c++
            } else {
                alert("Invalid Coupoun")
            }

        } else {
            alert("proceed to checkout page")
        }
    })
}


function getcards(title, category, color, discount, gender, image1, image2, packsize, price, rating, type) {
    let card = `
    <div class="cartgoingitem">
                <div class="img-1cart"><img
                        src=${image1}
                        alt=""></div>
                <div class="img-2cart"><img style="width: 250px;"
                        src=${image2}
                        alt=""></div>
                <div class="detailscart">
                    <h1 class="headcartmain">${title}</h1>
                    <p class="cartappendpara2">for ${gender}'s to ${category} with ${color} colour </p>
                    <p class="cartappendpara3">packsize is ${packsize}</p>
                    <p class="cartappendpara4">Ratings :- ${rating}</p>
                    <p class="cartappendpara5">MRP : <del class="priceprappendcart">${price}</del> <span class="cartpriceafter">₹${price * discount / 100}</span> <span class="discountaftercart">${discount}% off</span></p>
                    <button class="samcartafter1">+</button>
                    <button class="samparaafter">1</button>
                    <button class="samcartafter2">-</button>
                    <button class="removeitemcart">Remove</button>
                </div>
            </div>
        `
    return card
}
