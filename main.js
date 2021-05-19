// let name1 = document.getElementById("name");
// let description = document.getElementById("Description");
// let assigned = document.getElementById("Assigned");
// let form = document.getElementById("form");
// let error1 = document.getElementById("error");
if(!localStorage.getItem("submittedTasks")){
    localStorage.setItem("submittedTasks","[]")
}

// updatelocalstorage() {
//     localStorage.setItem("cardsList",JSON.stringify(TaskManager.cardsList))
//     localStorage.setItem("cardIds",JSON.stringify(TaskManager.cardIds))
// }


let taskNumber = 1
let postits = 0


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
            <p>Name: ${this.name}<br>
            Due date: ${this.duedate}<br>
            Assigned to: ${this.assigned}<br>
            Status: ${this.taskStatus}<br></p>
            <p id="desc">Description: ${this.description}</p>
            </a>
      `
      console.log(postItNote, document.getElementById("stickynotes"))


      if(postits<8){document.getElementById("stickynotes").appendChild(postItNote);
    } else if(postits<10){
        document.getElementById("stickynotes3").appendChild(postItNote);

    } else if(postits<18){
        document.getElementById("stickynotes2").appendChild(postItNote);

    } else{
        alert("No more notes")
    }

    }
}

let valid = false

function validateForm() {

  }

function add(){
    let name = document.getElementById("name").value;
    let description = document.getElementById("Description").value;
    let assignedTo = document.getElementById("Assigned").value;
    let date = document.getElementById("dueDate").value;
    let status = document.getElementById("Status").value;
    if ((name == "") || (name.length>20) || (description=="") || (description.length<20) || (assignedTo=="")|| (assignedTo.length>20) || (date.length<10) || (status=="") ){
      alert("Please enter a valid form...\nName must not be empty and fewer than 20 characters\nDescription must not be empty and must not be fewer than 20 characters\nAssigned must not be empty and must be fewer than 20 characters\nDate and status must not be empty");
      valid = false;
    } else{
        let task = new Task(name, description, date, assignedTo, status);
        let tasks = JSON.parse(localStorage.getItem("submittedTasks"));
        tasks.push(task)
        localStorage.setItem("submittedTasks", JSON.stringify(tasks));
        task.fillPostItNote()
        taskNumber ++
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
