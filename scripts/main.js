document.getElementById("submit-btn").addEventListener("click", (event) => {
    //event.preventDefault();

    let inputText = document.getElementById("textArea");
    let storedText = localStorage.getItem("textArea");

    var listItem = storedText;
    localStorage.setItem("textArea", inputText.value);

    lifo(inputText, e);
    fifo(storedText, e);

});

function lifo(listItem1,e) {
    e.preventDefault();

    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.innerText = listItem1;
    list.appendChild(li);
}

function fifo(listItem2, e) {
    e.preventDefault();
    let list = document.getElementById("list-2");
    let li = document.createElement("li");
    li.innerText = listItem2;
    list.appendChild(li);
}



