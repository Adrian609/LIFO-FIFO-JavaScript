
document.getElementById("submit-btn").addEventListener("click", (event) => {
    event.preventDefault();
    let getTextArea = document.getElementById("textArea");
    let inputText = document.getElementById("textArea");
    localStorage.setItem("textArea", inputText.value);
    lifo(getTextArea);
    fifo(getTextArea);
    document.getElementById("deleteBtn").addEventListener("click", deleteSelected);
});
document.getElementById("btnReset").addEventListener("click", deleteAll);

function deleteSelected() {
    var li = document.querySelector("li");
    li.remove();
}
function deleteAll() {
    var deleteList = document.getElementsByTagName("li")
    while (deleteList.length > 0) {
        var li = document.getElementById("listItem");
        li.remove();
        console.log(li, deleteList);
    }
}

function lifo(getTextArea) {
    let storedText = localStorage.getItem("textArea");
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.id = "listItem";
    li.className = "list-group-item";
    li.innerHTML = `${storedText}<button"type="button" id="deleteBtn" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
    list.appendChild(li);
    deleteFirstLast();
}
function fifo(getTextArea) {
    let storedText = localStorage.getItem("textArea");
    let list = document.getElementById("list-2");
    let li = document.createElement("li");
    li.id = "listItem";
    li.className = "list-group-item";
    li.innerHTML = `${storedText}<button type="button" id="deleteBtn" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
    list.appendChild(li);
}
function deleteFirstLast() {
    var first = document.getElementsByTagName("li")[0];
    var last = document.getElementsByTagName("li")[10];
    var length = document.getElementsByTagName("li").length;

    if (length >= 10 && first[0]!=0 ) {
        last.remove();
        first.remove();
    }else if(length >= 10){
        last.remove();
    }else if(first[0]!=0 && length >= 10){
        first.remove();
    }else{
        console.log("Ran Fine");
    }
    
}









