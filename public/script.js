// code for tracking unfinished movies

const form = document.getElementById("movieform");
const movielist = document.getElementById("movielist");

var movieList = [];

function addMovie(name, genre, opinion, year, time) {
  let movie = {
    name,
    genre,
    opinion,
    id: Date.now(),
    date: new Date().toString(),
    year,
    time,

  }
  movieList.push(movie);
  displayMovie(movie);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  addMovie(
    form.elements.movieName.value,
    form.elements.movieGenre.value,
    form.elements.movieOpinion.value,
    form.elements.movieYear.value,
    form.elements.movieProgress.value,
  )
})

function displayMovie(movie) {
 let item = document.createElement("li");
  item.setAttribute("data-id", movie.id);
  movieList.push(item.value)
  // add movies into local storage
  localStorage.setItem("items", JSON.stringify(movie))
  
  item.innerHTML = 
    `<h1><strong><i>${movie.name}</i></h1><p></strong><br>${movie.year}<br><br><em>${movie.genre}</em><br>
    <br>Opinion: ${movie.opinion} </p>
     <span>${movie.time} minutes left <br><br>
     <br><p><strong>Date added:</strong> ${movie.date}</p> </span>
    `;

  movielist.appendChild(item);

  form.reset();

  let delButton = document.createElement("delButton");
  // changed the bin icon to a tick, so when the user had completed the movie it can be ticked off
  let delButtonText = document.createTextNode("✅");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  delButton.addEventListener("click", function(event) {

    movieList.forEach(function(movieArrayElement, movieArrayIndex) {
      if (movieArrayElement.id == item.getAttribute('data-id')) {
        movieList.splice(movieArrayIndex, 1)
      
        // to delete already listed movies off the local storage
        localStorage.setItem("items", JSON.stringify(movieList))
      }
    })

    console.log(movieList)
    item.remove();
  })
}