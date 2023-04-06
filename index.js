
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://inshorts.deta.dev/news?category=science", requestOptions)
    .then(response => response.json())
    .then(data => {
      const newsContainer = document.querySelector(".image-container");
      const searchInput = document.querySelector("#search-input");
      const searchButton = document.querySelector("#search-button");
  
      // function to filter news articles by title
      const filterNews = (searchTerm) => {
        // clear existing articles
        newsContainer.innerHTML = "";
  
        // filter articles by title
        const filteredArticles = data.news.filter(article => {
          return article.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
  
        // create article elements for filtered articles
        filteredArticles.forEach(article => {
          const imageBox = document.createElement("div");
          imageBox.classList.add("image-box");
  
          const img = document.createElement("img");
          img.src = article.image_url;
          img.alt = article.title;
  
          const buttons = document.createElement("div");
          buttons.classList.add("buttons");
  
          const likeButton = document.createElement("button");
          likeButton.classList.add("like-button");
          likeButton.textContent = "Like";
  
          const viewButton = document.createElement("button");
          viewButton.classList.add("view-button");
          viewButton.textContent = "View";
          viewButton.addEventListener("click", () => {
            window.open(article.url, "_blank");
          });
  
          buttons.appendChild(likeButton);
          buttons.appendChild(viewButton);
  
          imageBox.appendChild(img);
          imageBox.appendChild(buttons);
  
          newsContainer.appendChild(imageBox);
        });
      };
  
      // display all news articles by default
      filterNews("");
  
      // add event listener to search button
      searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.trim();
        filterNews(searchTerm);
      });
    })
    .catch(error => console.log('error', error));
  