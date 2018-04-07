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
    li.id="lifo-list";

    li.innerText = storedText;
    list.appendChild(li);
    deleteFirstLast();
}

function fifo(getTextArea) {
    let storedText = localStorage.getItem("textArea");
    let list = document.getElementById("list-2");
    let li = document.createElement("li");
    li.id = "fifo-list";

    li.innerText = storedText;
    list.appendChild(li);
}

function deleteFirstLast(){
    //var z = document.getElementById("fifo-list");
    var x = document.getElementsByTagName("li")[0];
    var q = document.getElementsByTagName("li")[10];
    var y = document.getElementsByTagName("li").length;
    console.log(x,y);
    if(y>=10){
        x.remove();
        q.remove();
    }else{
        console.log("y: "+y);
    }

    console.log(x,y);
    
}



