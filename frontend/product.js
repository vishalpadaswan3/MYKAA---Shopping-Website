
const cont = document.getElementById("rightsidepr")

window.addEventListener("load", () => {
    fetch("http://localhost:9090/products", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
        .then(res => {
            console.log(res)
            let cartdata = res.map(item => {
                return {
                    title: item.title.substring(0,25),
                    category: item.category,
                    color: item.color,
                    discount: item.discount,
                    gender: item.gender,
                    image1: item.image[0],
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
        let cartlist = `
                ${cartdata.map(item => getcards(item.title, item.category, item.color, item.discount, item.gender, item.image1, item.packsize, item.price, item.rating, item.type)).join(" ")}
            `
        cont.innerHTML = cartlist
    }

    function getcards(title, category, color, discount, gender, image1, packsize, price, rating, type) {
        let card = `
        <div class="appendpr">
        <img src=${image1} alt="">
        <h2 id="calm">${title}</h2>
        <h3 id="salm">${category}</h3>
        <h3>${color}</h3>
        <h3>${discount}</h3>
        <h3>${gender}</h3>
        <h3>${packsize}</h3>
        <h3>${price}</h3>
        <h3>${rating}</h3>
        <h3>${type}</h3>
        </div>
        `
        return card
    }
})

