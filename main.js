// let name1 = document.getElementById("name");
// let description = document.getElementById("Description");
// let assigned = document.getElementById("Assigned");
// let form = document.getElementById("form");
// let error1 = document.getElementById("error");
if(!localStorage.getItem("submittedTasks")){
    localStorage.setItem("submittedTasks","[]")
}

let taskNumber = 1


class Task {
    constructor(name, description, date, assignedTo, status) {
        this.id = taskNumber
      this.name = name;
      this.description = description;
      this.duedate = date;
      this.assigned = assignedTo;
      this.taskStatus = status;
    }

    fillPostItNote(){
        let postItNote = document.createElement("li")
        postItNote.innerHTML = `              
            <a href="#" contenteditable>
            <h2>Task ${this.id}</h2>
            <p>Name: ${this.name}</p>
            <p>Description: ${this.description}</p>
            <p>Due date: ${this.duedate}</p>
            <p>Assigned to: ${this.assigned}</p>
            <p>Status: ${this.taskStatus}</p>
            </a>
      `
      console.log(postItNote, document.getElementById("stickynotes"))
      document.getElementById("stickynotes").appendChild(postItNote);
    
    }

    
}

function add(){
    let name = document.getElementById("name").value;
    let description = document.getElementById("Description").value;
    let assignedTo = document.getElementById("Assigned").value;
    let date = document.getElementById("dueDate").value;
    let status = document.getElementById("Status").value;

    
    let task = new Task(name, description, date, assignedTo, status);
    let tasks = JSON.parse(localStorage.getItem("submittedTasks"));
    tasks.push(task)
    localStorage.setItem("submittedTasks", JSON.stringify(tasks));
    task.fillPostItNote()
    taskNumber ++
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

// form.addEventListener('blur', (e) => {
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

