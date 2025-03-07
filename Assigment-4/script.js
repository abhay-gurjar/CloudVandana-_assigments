const add = () => {
    let input = document.getElementById("Input");
    let task = input.value.trim();
    if (!task) return;

    let li = document.createElement("li");
    li.innerText = task;

    let del = document.createElement("button");
    del.innerText = "Remove";
    del.onclick = () => li.remove();

    li.appendChild(del);
    document.getElementById("list").appendChild(li);
    
    input.value=" ";
};