const scriptURL = "https://script.google.com/macros/s/AKfycbzsyXjFAzJ1BTUlF265NR1atWI0jPNJK3XNEpBu87kgFdf1eeXu62SA4gDBac3_qHb0Cw/exec"

let form = document.getElementById("form_contact");


form.addEventListener("submit", (e) => {
    e.preventDefault()

    fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
        })
        .then((response) => {
            setTimeout(() => {
                localStorage.removeItem("cart")
                window.location.reload()
            }, 3000)
        })
        .catch((error) => console.error("eroor!", error.message))
})