const name1 = document.getElementById("name");
const description = document.getElementById("Description");
const assigned = document.getElementById("Assigned");
const form = document.getElementById("form");
const error1 = document.getElementById("error");

form.addEventListener('submit', (e) => {
    let messages = []
    if (name1.value ===''|| name1.value == null){
        messages.push("")
        
    }
    if (name1.value.length > 19){
        messages.push("Name should be less that 20 characters")

    }

    if(messages.length>0){
        e.preventDefault()
        error1.innerText = messages.join(', ')
    }
})

