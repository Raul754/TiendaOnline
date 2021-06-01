function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function addItem(id){
    var title = document.getElementById(id).title;
    const div = document.createElement("div");
    div.textContent = title;
    const app = document.getElementById("lista");
    app.appendChild(div);
    const button = document.createElement("button");
    button.innerText = "Eliminar";
    div.appendChild(button);
}

function removeItem(){

}