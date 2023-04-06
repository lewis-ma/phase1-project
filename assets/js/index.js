const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://inshorts.deta.dev/news?category=all", requestOptions)
  .then(response => response.json())
  .then(data => {
    const articles = data.data;
    const articleContainer = document.querySelector('.article-container');

    articles.forEach(article => {
      const articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      const articleImage = document.createElement('img');
      articleImage.src = article.image_url;
      articleImage.alt = article.title;
      articleImage.classList.add('article-image');
      articleDiv.appendChild(articleImage);

      const articleTitle = document.createElement('h3');
      articleTitle.textContent = article.title;
      articleTitle.classList.add('article-title');
      articleDiv.appendChild(articleTitle);

      const articleSummary = document.createElement('p');
      articleSummary.textContent = article.summary;
      articleSummary.classList.add('article-summary');
      articleDiv.appendChild(articleSummary);

      const articleLikes = document.createElement('button');
      articleLikes.textContent = `Like (${article.likes})`;
      articleLikes.classList.add('article-likes');
      articleLikes.addEventListener('click', () => {
        article.likes++;
        articleLikes.textContent = `Like (${article.likes})`;
      });
      articleDiv.appendChild(articleLikes);

      const articleViews = document.createElement('button');
      articleViews.textContent = `View (${article.views})`;
      articleViews.classList.add('article-views');
      articleViews.addEventListener('click', () => {
        article.views++;
        articleViews.textContent = `View (${article.views})`;
      });
      articleDiv.appendChild(articleViews);

      articleContainer.appendChild(articleDiv);
    });
  })
  .catch(error => console.log('error', error));
