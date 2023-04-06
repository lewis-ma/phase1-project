// const requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   fetch("https://inshorts.deta.dev/news?category=science", requestOptions)
//     .then(response => response.json())
//     .then(data => {
//       const newsContainer = document.querySelector(".image-container");
//       const searchInput = document.querySelector("#search-input");
//       const searchButton = document.querySelector("#search-button");

//       // function to filter news articles by title
//       const filterNews = (searchTerm) => {
//         // clear existing articles
//         newsContainer.innerHTML = "";

//         // filter articles by title
//         const filteredArticles = data.news.filter(article => {
//           return article.title.toLowerCase().includes(searchTerm.toLowerCase());
//         });

//         // create article elements for filtered articles
//         filteredArticles.forEach(article => {
//           const imageBox = document.createElement("div");
//           imageBox.classList.add("image-box");

//           const img = document.createElement("img");
//           img.src = article.image_url;
//           img.alt = article.title;

//           const buttons = document.createElement("div");
//           buttons.classList.add("buttons");

//       // Define a function to add likes to user's likes
//           const userLikes = [];
//           function addToLikes(artwork) {
//           if (userLikes.some(item => item.id === news.id)) {
//           console.log(`"${news.title}" is already in your likes`)
//         } else {
//           userLikes.push(news);
//           console.log(`"${news.title}" has been added to your likes`)
//        }
//       }
//           const likeBtn = document.createElement('button');
//           likeBtn.innerText = 'Like';
//           likeBtn.addEventListener('click', () => {
//           // Add code to handle adding a like to the artwork
//           addToLikes(artwork);
//           document.getElementById('Likes-list').innerHTML = `Likes-list: ${userLikes}`
//         });
//           // const likeButton = document.createElement("button");
//           // likeButton.classList.add("like-button");
//           // likeButton.textContent = "Like";

//           const viewButton = document.createElement("button");
//           viewButton.classList.add("view-button");
//           viewButton.textContent = "View";
//           viewButton.addEventListener("click", () => {
//             window.open(article.url, "_blank");
//           });

//           buttons.appendChild(likeBtn);
//           buttons.appendChild(viewButton);

//           imageBox.appendChild(img);
//           imageBox.appendChild(buttons);

//           newsContainer.appendChild(imageBox);
//         });
//       };

//       // display all news articles by default
//       filterNews("");

//       // add event listener to search button
//       searchButton.addEventListener("click", () => {
//         const searchTerm = searchInput.value.trim();
//         filterNews(searchTerm);
//       });
//     })
//     .catch(error => console.error(error));

//
const requestOptions = {
  method: "GET",
  redirect: "follow",
};

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://inshorts.deta.dev/news?category=all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const newsContainer = document.querySelector(".image-container");
      const searchInput = document.querySelector("#search-input");
      const searchButton = document.querySelector("#search-button");

      console.log(data);

      data.data.forEach((article) => {
        const imageBox = document.createElement("div");
        imageBox.classList.add("image-box");

        const img = document.createElement("img");
        img.src = article.imageUrl;
        img.alt = article.title;

        const buttons = document.createElement("div");
        buttons.classList.add("buttons");

        const likeBtn = document.createElement("button");
        likeBtn.innerText = 'Like';
        likeBtn.addEventListener("click", () => {
          console.log(`"${article.title}" has been liked`);
        });

        const viewButton = document.createElement("button");
        viewButton.classList.add("view-button");
        viewButton.textContent = "View";
        viewButton.addEventListener("click", () => {
          console.log("CLicked");
          window.open(article.url, "_blank");
        });

        buttons.appendChild(likeBtn);
        buttons.appendChild(viewButton);

        imageBox.appendChild(img);
        imageBox.appendChild(buttons);

        newsContainer.appendChild(imageBox);
      });

      // function to filter news articles by title
      const filterNews = (searchTerm) => {
        // clear existing articles
        newsContainer.innerHTML = "";

        // filter articles by title
        const filteredArticles = data.data.filter((article) => {
          return article.title.toLowerCase().includes(searchTerm.toLowerCase());
        });

        console.log(filteredArticles);
        if (data && data.news) {
          const filteredArticles = data.news.filter((article) => {
            return article.title
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          });

          console.log(filteredArticles);

          // create article elements for filtered articles
          filteredArticles.forEach((article) => {
            const imageBox = document.createElement("div");
            imageBox.classList.add("image-box");

            const img = document.createElement("img");
            img.src = article.image_url;
            img.alt = article.title;

            const buttons = document.createElement("div");
            buttons.classList.add("buttons");

            const likeBtn = document.querySelector(".like-button");
            // likeBtn.innerText = 'Like';
            likeBtn.addEventListener("click", () => {
              console.log(`"${article.title}" has been liked`);
            });

            const viewButton = document.createElement("button");
            viewButton.classList.add("view-button");
            viewButton.textContent = "View";
            viewButton.addEventListener("click", () => {
              console.log("CLicked");
              window.open(article.url, "_blank");
            });

            buttons.appendChild(likeBtn);
            buttons.appendChild(viewButton);

            imageBox.appendChild(img);
            imageBox.appendChild(buttons);

            newsContainer.appendChild(imageBox);
          });
        }
        // display all news articles by default
        filterNews("");

        // add event listener to search button
        searchButton.addEventListener("click", () => {
          const searchTerm = searchInput.value.trim();
          filterNews(searchTerm);
        });
      };
    })
    .catch((error) => {
      console.error(error);
      const newsContainer = document.querySelector(".image-container");
      newsContainer.innerHTML =
        "<p>Unable to load news articles. Please try again later.</p>";
    });
});
