var task = "faire mon cv";

console.log(task);
class Task {
  constructor(name, priority) {
    this.name = name;
    this.status = false;
    this.priority = priority;
  }
}

var tasksObjects = [new Task("Acheter une voiture", 4), new Task("Prévoir les vacances", 5), new Task("Faire les courses", 2), new Task("Faire du sport", 1)]

tasksObjects.forEach(task => console.log(task.name))

tasksObjects.forEach(task => {
  if (task.priority < 4) {
    task.status = true
  }
}
)

tasksDone = tasksObjects.filter(task => !task.status)
tasksDone.forEach(task => console.log(task.name))




// https://developer.mozilla.org/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Manipulating_documents

var tasksSection = document.querySelector('section');

function createTaskParagraph(taskText) {
  var taskPara = document.createElement('p');
  var taskTextNode = document.createTextNode(taskText);

  tasksSection.appendChild(taskPara)
  taskPara.appendChild(taskTextNode)
}



tasks = ["tache 1", "tache 2", "tache 3", "tache 4"];

tasks.forEach(taskText => createTaskParagraph(taskText))





