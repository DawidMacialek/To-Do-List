class Action {
    constructor() {
        this.add = new Add();
        this.move = new Move();
        this.btn = document.querySelector('.btn');
        this.btn.addEventListener('click', this.addingTask.bind(this));
        this.inputTask = document.querySelector('.input');        
        this.ulToDo = document.querySelector('.listToDo');
        this.ulDone = document.querySelector('.listDone');
        this.countToDo = document.querySelector('.countToDo div');
        this.countDone = document.querySelector('.countDone div');
        this.clearBtn = document.querySelector('button.btnClear');
        this.clearBtn.addEventListener('click', this.clearDone.bind(this))
        this.inputTask.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                action.addingTask();
            }
    })   
}
clearDone() {
    console.log('clear działa');   
    this.move.listDone = [];
    this.ulDone.textContent = "";
    this.renderList();
    this.countingTasks();
}
    removeTask = (e) => {
        e.target.parentNode.remove();
        const index = e.target.parentNode.dataset.key;
        this.add.listToDo.splice(index, 1);
        this.renderList();
        this.countingTasks();
    }
    addingTask()  {
        if (this.inputTask.value === "") return    
        this.task = document.createElement('li');
        this.task.className = 'task';
        this.task.innerHTML = `<p>${this.inputTask.value} </p><button class="smallDoneBtn">Done</button><button class="smallDeleteBtn">Delete</button>` ;
        this.add.addToList(this.task);
        this.renderList();
        this.ulToDo.appendChild(this.task); // this can be transform to the class add
        this.inputTask.value = ""; 
        this.task.querySelector('button.smallDoneBtn').addEventListener('click', this.movingTask.bind(this));
        this.task.querySelector('button:last-child').addEventListener('click', this.removeTask.bind(this));
        this.countingTasks();
    }
    movingTask(e) { 
        this.good = e.target.parentElement.firstChild.innerHTML;
        this.removeTask(e);
        this.taskDone = document.createElement('li');
        this.taskDone.className = 'taskDone';
        this.taskDone.innerHTML = `<p>${this.good}</p>`;
        this.move.addToListDone(this.taskDone);
        this.ulDone.prepend(this.taskDone);
        this.countingTasks();  
    }
    countingTasks() {
        this.renderList();
        this.countToDo.textContent = this.add.listToDo.length;
        this.countDone.textContent = this.move.listDone.length;
    }
    renderList() {
        this.ulToDo.textContent = "";
        this.add.listToDo.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        this.ulToDo.appendChild(toDoElement);
        })

    }
}
