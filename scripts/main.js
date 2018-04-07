document.getElementById("submit-btn").addEventListener("click", (event) => {
    event.preventDefault();
    let getTextArea = document.getElementById("textArea");
    let inputText = document.getElementById("textArea");
    localStorage.setItem("textArea", inputText.value);

    lifo(getTextArea);
    fifo(getTextArea);

});

function lifo(getTextArea) {
    let storedText = localStorage.getItem("textArea");
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.innerText = storedText;
    list.appendChild(li);
}

function fifo(getTextArea) {
    let storedText = localStorage.getItem("textArea");
    let list = document.getElementById("list-2");
    let li = document.createElement("li");
    li.innerText = storedText;
    list.appendChild(li);
}



