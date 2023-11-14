const input = document.getElementById("input-box");
const list = document.getElementById("list");

function AddATask(){
    if(input.value === ''){
        alert("write something idk");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        input.value = '';
        saveYourStupidTasks();
    }
}
list.addEventListener("click",function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("done");
        saveYourStupidTasks();
    }
}, false);

function saveYourStupidTasks(){
    localStorage.setItem("data", list.innerHTML);
}

function showYourStupidTasks(){
    list.innerHTML = localStorage.getItem("data");
}
showYourStupidTasks();