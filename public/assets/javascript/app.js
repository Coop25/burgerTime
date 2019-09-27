let left = document.getElementById("left");

function eatBurger(id) {
    console.log(id);
    let div = document.getElementById(id);
    axios.post("/burger", {
        id
    }).then(data => {
        let right = document.getElementById("right");
        let {
            id,
            burger_name
        } = data.data
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<h1 class="burger-eaten">${id}: ${burger_name}</h1>`;
        right.appendChild(newDiv);
        div.remove();
    })
}

function newBurger() {
    let textBox = document.getElementById("textArea");
    if (textBox.value.trim() === "") return alert("no burger entered!")
    axios.post("/newburger", {
        burger_name: textBox.value.trim()
    }).then(data => {
        let left = document.getElementById("left");
        let {
            id,
            burger_name
        } = data.data
        let newDiv = document.createElement("div");
        newDiv.id = id;
        newDiv.innerHTML = `
        <h1 class="burger">${id}: ${burger_name}</h1>
        <a onclick="eatBurger(${id})" class="burger-button">Devour</a>`;
        left.appendChild(newDiv);
        textBox.value = "";
    })
}