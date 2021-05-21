// let name1 = document.getElementById("name");
// let description = document.getElementById("Description");
// let assigned = document.getElementById("Assigned");
// let form = document.getElementById("form");
// let error1 = document.getElementById("error");
if(!localStorage.getItem("submittedTasks")){
    localStorage.setItem("submittedTasks","{}")
    localStorage.setItem("IDs","0")
}

let tasks = JSON.parse(localStorage.getItem("submittedTasks"));
let taskNumber = JSON.parse(localStorage.getItem("IDs"));
let postits = 1
let counter = 1
displayAll(tasks)
    


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
    delete tasks[taskId]
    updateLocalStorage()
    displayAll(tasks)
    counter--
}

function fillPostItNote(task, postits){
    let postItNote = document.createElement("li")
    postItNote.id = task.id
    console.log(postItNote)
    postItNote.innerHTML = `              
        <a href="#">
        <button style=" position: absolute; margin-left: 6.9em;  background:transparent; width:30px; border-color:transparent;"onclick="deleteTask(${task.id})"><img src="redx.png" style="width:100%;"></button>
        <h2>Task ${postits}</h2>  
        <button  onclick="edit(${task.id})"style="position: absolute; margin-bottom:1em; margin-left: 6.9em;  background:transparent; width:30px; border-color:transparent;"><img style = "width:100%;" src="edit.png"></button>
        <p>Name: ${task.name}<br>
        <button  onclick="finished(${task.id})" style="position: absolute; margin-bottom:0.5em; margin-left: 7.2em; background:transparent; width:40px; border-color:transparent;"><img style = "width:100%;" src="tick.png"></button>
        Due date: ${task.duedate}<br>
        Assigned to: ${task.assigned}<br>
        Status: ${task.taskStatus}<br></p>
        <p contenteditable id="desc">Description: ${task.description}</p>       
        </a>
    `


    if(postits<=8){document.getElementById("stickynotes").appendChild(postItNote);
} else if(postits<=16){
    document.getElementById("stickynotes2").appendChild(postItNote);

} else{
    
}


}

function finished(taskId){
    task=tasks[taskId]
    document.getElementById(task.id).innerHTML = `        
    <img src="finished.png" style="position:absolute; justify-content:center; z-index:2; width:200px;">      
 <a href="#" style="opacity:40%">
 <button style=" position: absolute; margin-left: 6.9em;  background:transparent; width:30px; border-color:transparent;"onclick="deleteTask(${task.id})"><img src="redx.png" style="width:100%;"></button>
 <h2>Task COMPLETE</h2>
 <p contenteditable>Name:COMPLETE<br>
 Due date: COMPLETE<br>
 Assigned to: COMPLETE<br>
 Status: COMPLETE<br></p>
 <p id="desc" content editable>Description: COMPLETE</p>
 </a>
`


}

function save(taskId){
    task = tasks[taskId]
    localStorage[taskId] = document.getElementById(taskId).innerHTML;
    document.getElementById(task.id).innerHTML = `              
    <a href="#">
    <button style=" position: absolute; margin-left: 6.9em;  background:transparent; width:30px; border-color:transparent;"onclick="deleteTask(${task.id})"><img src="redx.png" style="width:100%;"></button>
    <h2>Task ${postits}</h2>
    <button style="position: absolute; margin-bottom:1em; margin-left: 6.9em;  background:transparent; width:40px; border-color:transparent;" onclick="edit(${task.id})"><img style = "width:100%;" src="edit.png"></button>
    <p>Name: ${task.name}<br>
    Due date: ${task.duedate}<br>
    Assigned to: ${task.assigned}<br>
    Status: ${task.taskStatus}<br></p>
    <p id="desc">Description: ${task.description}</p>
    </a>
`
}

function edit(taskId){
task = tasks[taskId]
document.getElementById(task.id).innerHTML = `              
 <a href="#">
 <button style=" position: absolute; margin-left: 6.9em;  background:transparent; width:30px; border-color:transparent;"onclick="deleteTask(${task.id})"><img src="redx.png" style="width:100%;"></button>
 <h2>Task ${postits}</h2>
 <button style="position: absolute; margin-bottom:1em; margin-left: 6.9em;  background:transparent; width:40px; border-color:transparent;" onclick="save(${task.id})"><img style = "width:100%;" src="save.png.png"></button>
 <p contenteditable>Name: ${task.name}<br>
 Due date: ${task.duedate}<br>
 Assigned to: ${task.assigned}<br>
 Status: ${task.taskStatus}<br></p>
 <p contenteditable id="desc" content editable>Description: ${task.description}</p>
 </a>
`
}

function updateLocalStorage(){
    localStorage.setItem('submittedTasks', JSON.stringify(tasks))
    localStorage.setItem('IDs', JSON.stringify(taskNumber))
}

function clearAllTasks() {
    localStorage.clear()
    document.getElementById("stickynotes").innerHTML = ""
    document.getElementById("stickynotes2").innerHTML = ""
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
    // getting tasks, and checking length
    
    if(counter>16){
      alert("no more notes")
    } else if((name == "") || (name.length>20) || (description=="") || (description.length<20) || (assignedTo=="")|| (assignedTo.length>20) || (date.length<10) || (status=="") ) {
        alert("Please enter a valid form...\nName must not be empty and fewer than 20 characters\nDescription must not be empty and must not be fewer than 20 characters\nAssigned must not be empty and must be fewer than 20 characters\nDate and status must not be empty");
    } else {
        taskNumber ++
        let task = new TaskClass(name, description, date, assignedTo, status);
        tasks[taskNumber] = task
        updateLocalStorage() 
        displayAll(tasks)
        counter++
        
    }
}

function displayAll(tasks){
    document.getElementById("stickynotes").innerHTML = ""
    document.getElementById("stickynotes2").innerHTML = ""
    
    let postits = 1
    for (let key in tasks){
         fillPostItNote(tasks[key], postits)
         postits++
    }
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
