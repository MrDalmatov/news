/*jshint esnext: true */

async function getResponse() {
  let response = await fetch('data.json');
  let content = await response.json();

  let list = document.querySelector('.news-wrapper');
  let key;

  for (key in content) {
    
    list.innerHTML += `
    
          <div class="news-item">
            <div class="image-box">
              <img src="${content[key].img}" alt="" class="news-item-image">
            </div>
            <div class="news-content">
              <p class="news-date">${content[key].date}</p>
              <h3 class="news-title">${content[key].title}</h3>
              <p class="news-preview">${content[key].anons}</p>
            </div>
            <div class="news-footer">
              <div class="views-boxes">
                <span class="views">${content[key].view_count}</span>
                <span class="comments">${content[key].comment_count}</span>
              </div>
              <a href="${content[key].link}" class="more-info">Подробнее</a>
            </div>
          </div>
        
    `;

  }
}

getResponse();

