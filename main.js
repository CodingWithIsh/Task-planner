// let name1 = document.getElementById("name");
// let description = document.getElementById("Description");
// let assigned = document.getElementById("Assigned");
// let form = document.getElementById("form");
// let error1 = document.getElementById("error");
if(!localStorage.getItem("submittedTasks")){
    localStorage.setItem("submittedTasks","[]")
    localStorage.setItem("IDs","0")
}


// updatelocalstorage() {
//     localStorage.setItem("cardsList",JSON.stringify(TaskManager.cardsList))
//     localStorage.setItem("cardIds",JSON.stringify(TaskManager.cardIds))
// }

let tasks = JSON.parse(localStorage.getItem("submittedTasks"));
let taskNumber = JSON.parse(localStorage.getItem("IDs"));
let postits = 0
// let TaskManager = {}

class TaskClass {
    constructor(name, description, date, assignedTo, status) {
      this.id = taskNumber
      this.name = name;
      this.description = description;
      this.duedate = date;
      this.assigned = assignedTo;
      this.taskStatus = status;
    }

}

function deleteTask(taskId){
    document.getElementById(taskId).remove()

    
}

function fillPostItNote(task){
    postits++
    let postItNote = document.createElement("li")
    postItNote.id = task.id
    console.log(postItNote)
    postItNote.innerHTML = `              
        <a href="#" contenteditable>
        <h2>Task ${postits}</h2>
        <p>Name: ${task.name}<br>
        Due date: ${task.duedate}<br>
        Assigned to: ${task.assigned}<br>
        Status: ${task.taskStatus}<br></p>
        <p id="desc">Description: ${task.description}</p>
        <button onclick="deleteTask(${task.id})"></button>
        </a>
    `



    if(postits<=8){document.getElementById("stickynotes").appendChild(postItNote);
} else if(postits<=10){
    document.getElementById("stickynotes3").appendChild(postItNote);

} else if(postits<=18){
    document.getElementById("stickynotes2").appendChild(postItNote);

} else{
    
}

}

function updateLocalStorage(){
    localStorage.setItem('submittedTasks', JSON.stringify(tasks))
    localStorage.setItem('IDs', JSON.stringify(taskNumber))
}

this.tasks

let valid = false

function validateForm() {

  }

function clearAllInputs(){
    for(let inputkey in inputs){

    }
}

function add(){
    let name = document.getElementById("name").value;
    let description = document.getElementById("Description").value;
    let assignedTo = document.getElementById("Assigned").value;
    let date = document.getElementById("dueDate").value;
    let status = document.getElementById("Status").value;
    if(postits>18){
      alert("no more notes")
    } else if((name == "") || (name.length>20) || (description=="") || (description.length<20) || (assignedTo=="")|| (assignedTo.length>20) || (date.length<10) || (status=="") ) {
        alert("Please enter a valid form...\nName must not be empty and fewer than 20 characters\nDescription must not be empty and must not be fewer than 20 characters\nAssigned must not be empty and must be fewer than 20 characters\nDate and status must not be empty");
    } else {
        taskNumber ++
        let task = new TaskClass(name, description, date, assignedTo, status);
        tasks.push(task)
        updateLocalStorage()
        localStorage.setItem("submittedTasks", JSON.stringify(tasks));
        fillPostItNote(task)
    }


}

for(task of tasks){
    fillPostItNote(task)
}


// function fillPostItNote(){
//     let postItNote = document.createElement("div")
//     postItNote.innerHTML = `              
//     <li>
//         <a href="#" contenteditable>
//         <h2>Task 1</h2>
//         <p>Name: ${name}</p>
//         <p></p>
//         <p></p>
//         <p></p>
//         <p></p>
//         </a>
//     </li>
//   `
//   document.getElementById("stickynotes").appendChild("postItNote");

// }

// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (name1.value ===''|| name1.value == null){
//         messages.push("")
        
//     }
//     if (name1.value.length > 19){
//         messages.push("Name should be less that 20 characters")

//     }

//     if(messages.length>0){
//         e.preventDefault()
//         error1.innerText = messages.join(', ')
//     }
// })

// retrieving local storage

// let cardsListStorage = localStorage.getItem("submittedTasks")
// let cardIdsStorage = localStorage.getItem("cardIds")
// console.log(JSON.parse(cardsListStorage), JSON.parse(cardIdsStorage))

// if(cardsListStorage){
//     submittedTasks = JSON.parse(cardsListStorage)
//     TaskManager.cardIds = JSON.parse(cardIdsStorage)
//     TaskManager.add()
// }

function myfun() {
    
    submittedTasks.splice(this.id, 1);     

}