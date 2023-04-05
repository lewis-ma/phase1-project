const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://inshorts.deta.dev/news?category=science", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
let searchButton = document.querySelector("#search-btn");
let searchBar = document.querySelector("#search");
let familyButton = document.querySelector("#family-btn");
let businessButton = document.querySelector("#business-btn");
let technologyButton = document.querySelector("#technology-btn");
let newsContainer = document.querySelector("#news-container");

searchButton.addEventListener("click", function() {
  let searchTerm = searchBar.value;
  // Perform search here
});

familyButton.addEventListener("click", function() {
  // Load family news articles here
});

businessButton.addEventListener("click", function() {
  // Load business news articles here
});

technologyButton.addEventListener("click", function() {
  // Load technology news articles here
});
