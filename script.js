let noStatusBox = document.getElementById("no_status")
let noStartedBox = document.getElementById("no_started")
let inProgressBox = document.getElementById("in_progress")
let completedBox = document.getElementById("completed")

let todoes = document.getElementsByClassName("todo")

for (const todo of todoes) {
    todo.addEventListener("dragstart", function(e){
        let selected = e.target

        noStatusBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        noStatusBox.addEventListener("drop",function(e){
            noStatusBox.appendChild(selected)
            selected = null
        })


        noStartedBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        noStartedBox.addEventListener("drop",function(e){
            noStartedBox.appendChild(selected)
            selected = null
        })


        inProgressBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        inProgressBox.addEventListener("drop",function(e){
            inProgressBox.appendChild(selected)
            selected = null
        })


        completedBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        completedBox.addEventListener("drop",function(e){
            completedBox.appendChild(selected)
            selected = null
        })
    })
}





let closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var todoItem = this.parentElement;
        todoItem.remove();
    });
});