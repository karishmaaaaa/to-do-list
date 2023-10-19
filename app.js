var list = []
var input = document.getElementById("input");
var todoList = document.getElementById("todolist")
document.getElementById("button").onclick = click;
function click() {
    list.push(input.value);
    input.value = "";
    showlist()
}

function showlist(){
    todoList.innerHTML = " ";
    list.forEach(function (va, ind){
        todoList.innerHTML += 
        "<li>" + va + "<a onclick = 'edit(" +
        ind + ")'>Edit</a>" + "<a onclick = 'delet(" + ind +
        ")'>&times | </a></li>";
        //&times is to get the x symbol
    });
}

function delet(val){
    list.splice(val, 1);
    showlist()
}
function edit(val) {
    var newitem = prompt("Please insert your new value");
    list.splice(val, 1, newitem);
    showlist()
}