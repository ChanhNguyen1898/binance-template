fetch("./layout/header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });

fetch("./layout/footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });
fetch("./layout/global.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("section").innerHTML = data;
    });
