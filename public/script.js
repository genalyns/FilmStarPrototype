
const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

var taskList = [];

function addTask(name, type, rate, time) {
  let task = {
    name,
    type,
    id: Date.now(),
    date: new Date().toString(),
    time,

  }
  taskList.push(task);
  displayTask(task);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  addTask(
    form.elements.movieName.value,
    form.elements.movieGenre.value,
    form.elements.movieYear.value,
    form.elements.movieProgress.value,
  )
})

function displayTask(task) {
  let item = document.createElement("li");
  item.setAttribute("data-id", task.id);
  item.innerHTML = 
    `<h1><strong><i>${task.name}</i></h1><p></strong><br>${task.rate}<br><br><em>${task.type}</em><br></p>
     <span>${task.time} minutes left <br><br>
     <br><p>Date added: ${task.date}</p> </span>
    `;

  tasklist.appendChild(item);

  form.reset();

  let delButton = document.createElement("delButton");
  let delButtonText = document.createTextNode("❌");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  delButton.addEventListener("click", function(event) {

    taskList.forEach(function(taskArrayElement, taskArrayIndex) {
      if (taskArrayElement.id == item.getAttribute('data-id')) {
        taskList.splice(taskArrayIndex, 1)
      }
    })

    console.log(taskList)
    item.remove();
  })
}
