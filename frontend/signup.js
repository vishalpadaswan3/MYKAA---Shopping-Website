
const form = document.getElementById("form")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const payload = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobileNo: document.getElementById("mobile").value,
        gender: document.getElementById("gender").value,
        password: document.getElementById("password").value
    }
    console.log(payload)
    fetch("http://localhost:9090/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
})


