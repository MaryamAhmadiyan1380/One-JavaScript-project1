let input = document.querySelector("#inputBx");
let list = document.querySelector("#list");
let btnAddTask=document.getElementById("btn")
let btnDleteTask=document.getElementById("btnDelete");
input.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        addItem(this.value);
        this.value = '';

    }
});

let addItem = (input) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${input}<i></i>`;
    
    listItem.addEventListener('click', function () {
        listItem.classList.add('done');
    });
    listItem.querySelector('i').addEventListener('click', function () {
        listItem.remove();
    });
    
    list.appendChild(listItem);

}
btnAddTask.addEventListener('click',function (e) {
   
        addItem(input.value);
        input.value = '';
});
btnDleteTask.addEventListener('click',deleteItem);

function deleteItem(){
   list.remove()
   window.alert("your Tasks deleted width successfully...! Thre is no Tasks")
   
}


