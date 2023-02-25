
const cont = document.getElementById("rightsidepr")
const totalprs = document.getElementById("totalprs")
const carthomeprice = document.getElementById("carthomeprice")
const carthome = document.getElementById("carthome")

const face = document.getElementById("face")
const eyes = document.getElementById("eyes")
const necklace = document.getElementById("nacklace")
const lips = document.getElementById("lips")
const nail = document.getElementById("nails")
const clvppr = document.getElementById("closevppr")
// ----------------------------------------------------------------------
const female = document.getElementById("female")
const male = document.getElementById("male")
const unisex = document.getElementById("unisex")
const clvppr3 = document.getElementById("closevppr3")
// ----------------------------------------------------------------------
const moisturizers = document.getElementById("moisturizers")
const cleaners = document.getElementById("cleaners")
const masks = document.getElementById("maks")
const bodycare = document.getElementById("bodycare")
const clvppr2 = document.getElementById("closevppr2")
// ---------------------------------------------------------------------
const haircare = document.getElementById("haircare")
const tools = document.getElementById("tools")
const styles = document.getElementById("styles")
const clvppr4 = document.getElementById("closevppr4")
// ---------------------------------------------------------------------

const pink = document.getElementById("pink")
const brown = document.getElementById("brown")
const red = document.getElementById("red")
const voilet = document.getElementById("voilet")
const white = document.getElementById("white")
const blue = document.getElementById("blue")
const clvppr5 = document.getElementById("closevppr5")
const silver = document.getElementById("silver")


// ---------------------------------------------------------------------

const single = document.getElementById("single")
const multipacks = document.getElementById("multipacks")
const packs = document.getElementById("packs")
const clvppr6 = document.getElementById("closevppr6")

const popuselect = document.getElementById("popuselect")

let data = []



fetch("http://localhost:9090/products", {
    method: "GET",
    headers: {
        "Content-type": "application/json"
    }
}).then(res => res.json())
    .then(res => {
        console.log(res)

        let mata = res


        totalprs.innerText = res.length

        let cartdata = res.map(item => {
            return {
                title: item.title.substring(0, 20),
                category: item.category,
                color: item.color,
                discount: item.discount,
                gender: item.gender,
                image1: item.image[0],
                image2: item.image[1],
                packsize: item.packsize,
                price: item.price,
                rating: item.rating,
                type: item.type,
                id: item._id
            }
        })
        render(cartdata)
    })

    .catch(err => console.log(err))

function render(cartdata) {
    sison(cartdata)
    data = cartdata

    face.addEventListener("click", () => {
        data = data.filter(item => item.category == "face");
        sison(data)
        data = cartdata
    })

    eyes.addEventListener("click", () => {
        data = data.filter(item => item.category == "eyes");
        sison(data)
        data = cartdata
    })
    necklace.addEventListener("click", () => {
        data = data.filter(item => item.category == "necklace");
        sison(data)
        data = cartdata
    })

    lips.addEventListener("click", () => {
        data = data.filter(item => item.category == 'lips');
        sison(data)
        data = cartdata
    })
    nail.addEventListener("click", () => {
        data = data.filter(item => item.category == 'nails');
        sison(data)
        data = cartdata
    })
    clvppr.addEventListener("click", () => {
        sison(cartdata)
    })

    // ----------------------------------------------------------------------gender

    male.addEventListener("click", () => {
        data = data.filter(item => item.gender == 'male');
        sison(data)
        data = cartdata
    })
    female.addEventListener("click", () => {
        data = data.filter(item => item.gender == 'female');
        sison(data)
        data = cartdata
    })
    unisex.addEventListener("click", () => {
        data = data.filter(item => item.gender == 'unisex');
        sison(data)
        data = cartdata
    })
    clvppr3.addEventListener("click", () => {
        sison(cartdata)
    })

    // -------------------------------------------------------------------------------------skin



    moisturizers.addEventListener("click", () => {
        data = data.filter(item => item.category == "moisturizers");
        sison(data)
        data = cartdata
    })
    cleaners.addEventListener("click", () => {
        data = data.filter(item => item.category == "cleansers");
        sison(data)
        data = cartdata
    })

    masks.addEventListener("click", () => {
        data = data.filter(item => item.category == 'masks');
        sison(data)
        data = cartdata
    })
    bodycare.addEventListener("click", () => {
        data = data.filter(item => item.category == 'bodycare');
        sison(data)
        data = cartdata
    })
    clvppr2.addEventListener("click", () => {
        sison(cartdata)
    })

    // -----------------------------------------------------------------hair
    haircare.addEventListener("click", () => {
        data = data.filter(item => item.category == "haircare");
        sison(data)
        data = cartdata
    })

    tools.addEventListener("click", () => {
        data = data.filter(item => item.category == 'hairtools');
        sison(data)
        data = cartdata
    })
    styles.addEventListener("click", () => {
        data = data.filter(item => item.category == 'hairstyles');
        sison(data)
        data = cartdata
    })
    clvppr4.addEventListener("click", () => {
        sison(cartdata)
    })

    // -----------------------------------------------------------------------color
    pink.addEventListener("click", () => {
        data = data.filter(item => item.color == "pink");
        sison(data)
        data = cartdata
    })

    brown.addEventListener("click", () => {
        data = data.filter(item => item.color == 'brown');
        sison(data)
        data = cartdata
    })
    red.addEventListener("click", () => {
        data = data.filter(item => item.color == 'red');
        sison(data)
        data = cartdata
    })
    voilet.addEventListener("click", () => {
        data = data.filter(item => item.color == 'voilet');
        sison(data)
        data = cartdata
    })
    white.addEventListener("click", () => {
        data = data.filter(item => item.color == 'white');
        sison(data)
        data = cartdata
    })
    blue.addEventListener("click", () => {
        data = data.filter(item => item.color == 'blue');
        sison(data)
        data = cartdata
    })
    silver.addEventListener("click", () => {
        data = data.filter(item => item.color == 'silver');
        sison(data)
        data = cartdata
    })
    clvppr5.addEventListener("click", () => {
        sison(cartdata)
    })

    // -----------------------------------------------------------------------packs
    single.addEventListener("click", () => {
        data = data.filter(item => item.packsize == "single");
        sison(data)
        data = cartdata
    })

    multipacks.addEventListener("click", () => {
        data = data.filter(item => item.packsize == 'multipacks');
        sison(data)
        data = cartdata
    })
    packs.addEventListener("click", () => {
        data = data.filter(item => item.packsize == 'packs');
        sison(data)
        data = cartdata
    })

    clvppr6.addEventListener("click", () => {
        sison(cartdata)
    })

    carthome.addEventListener("click", () => {
        window.location.assign("./cart.html")
    })

    popuselect.addEventListener("change", () => {
        let value = popuselect.value
        if (value === "CustomerTopRated") {
            data = data.filter(item => item.rating == "★★★★★")
            sison(data)
            data = cartdata
        } else if (value == "Hightolow") {
            data = data.sort((a, b) => b.price - a.price)
            sison(data)
            data = cartdata
        } else if (value == "Lowtohigh") {
            data = data.sort((a, b) => a.price - b.price)
            sison(data)
            data = cartdata
        } else if (value == "Discount") {
            data = data.sort((a, b) => b.discount - a.discount)
            sison(data)
            data = cartdata
        } else if (value == "Name") {
            data = data.sort((a, b) => a.title.localeCompare(b.title));
            sison(data)
            data = cartdata
        }
    })
}

function sison(cartdata) {
    let cartlist = `
                ${cartdata.map(item => getcards(item.title, item.category, item.color, item.discount, item.gender, item.image1, item.packsize, item.price, item.rating, item.type)).join(" ")}
            `
    cont.innerHTML = cartlist

    let likebtn = document.getElementsByClassName("likepr")
    let addcart = document.getElementsByClassName("cartpr")
    console.log(likebtn)
    // console.log(addcart)

    for (let i = 0; i < likebtn.length; i++) {
        likebtn[i].addEventListener("click", () => {
            console.log("HI amaji")
        })
    }
    for (let i = 0; i < addcart.length; i++) {
        let sam = JSON.parse(localStorage.getItem("buy")) || []
        addcart[i].addEventListener("click", () => {

            let flag = false;
            for (let j = 0; j < sam.length; j++) {
                if (sam[j].id == cartdata[i].id) {
                    flag = true;
                    break;
                }
            }

            if (flag === true) {
                if ('speechSynthesis' in window) {
                    const message = new SpeechSynthesisUtterance('Product Already Added to cart');
                    const femaleVoices = speechSynthesis.getVoices().filter(voice => voice.name.includes('female'));
                    if (femaleVoices.length > 0) {
                        message.voice = femaleVoices[0];
                    }
                    speechSynthesis.speak(message);
                }
                const module = document.getElementById('cart-module');
                module.innerText = "Product Already Added to cart ❌"
                module.style.display = 'block';
                module.style.backgroundColor = 'orange'

                setTimeout(function () {
                    module.style.display = 'none';
                }, 6000);


            } else {
                sam.push(cartdata[i])
                localStorage.setItem("buy", JSON.stringify(sam))
                if ('speechSynthesis' in window) {
                    const message = new SpeechSynthesisUtterance('Product Successfully Added to cart 🎉');
                    const femaleVoices = speechSynthesis.getVoices().filter(voice => voice.name.includes('female'));
                    if (femaleVoices.length > 0) {
                        message.voice = femaleVoices[0];
                    }
                    speechSynthesis.speak(message);
                }
                const module = document.getElementById('cart-module');
                module.innerText = "Product Successfully Added to cart 🎉"
                module.style.display = 'block';
                module.style.backgroundColor = '#4CAF50'

                setTimeout(function () {
                    module.style.display = 'none';
                }, 6000);
            }

        })
        carthomeprice.innerText = sam.length;
    }

    // let mat = JSON.parse(localStorage.getItem("solo"))

    // let appendpr = document.getElementsByClassName("imagehash")
    // for (let i = 0; i < appendpr.length; i++) {
    //     appendpr[i].addEventListener("click", () => {
    //         mat.push(appendpr[i])
    //         localStorage.setItem("solo", JSON.stringify(mat))
    //     })
    // }
}

function getcards(title, category, color, discount, gender, image1, packsize, price, rating, type) {
    let card = `
    <div class="appendpr">
    <p class="paraprappend">${type}</p>
    <img class="imagehash" src=${image1} alt="">
    <p class="paraprappend2">${title}</p>
    <p class="paraprappend3">for ${gender}'s to ${category} with ${color} colour</p>
    <p class="paraprappend4">MRP : <del class="priceprappend">${price}</del> <span
            class="somethingprice"> ₹${(price * discount) / 100}</span> <span class="disocuntoff">  ${discount}% off</span></p>
    <p class="paraprappend5">${rating}</p>
    <div class="samprappend">
        <button class="likepr"><img src="https://cdn-icons-png.flaticon.com/512/707/707680.png"
                alt=""></button><button class="cartpr">Add to Bag</button>
    </div>
    <div class="module" id="cart-module">
    <span>Product added to cart</span>
    <span class="module-close" onclick="closeModule()">&times;</span>
  </div>
</div>
        `
    return card
}



