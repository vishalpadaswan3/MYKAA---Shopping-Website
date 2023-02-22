

const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const payload = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    console.log(payload)
    fetch("http://localhost:9090/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res => {
            console.log(res)
            if (payload.email == "vishal@gmail.com") {
                localStorage.setItem("isAdmin", res.isAdmin)
                window.location.assign("./module.html")
            } else {
                localStorage.setItem("token", res.token)
            }
        })
        .catch(err => console.log(err))
})


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function submitForm() {
    var email = document.getElementById("email").value;

    console.log("Sending email to: " + email);
    document.getElementById("message").style.display = "block";
    return false;
}


