import message from './message.js';

export default async () => {
  // call api to get shows
  const uri = 'https://api.tvmaze.com/shows?page=1';
  try {
    const response = await fetch(uri, { method: 'GET' });
    if (response.ok) {
      const shows = await response.json();
      // parse the data into the page
      const container = document.querySelector('.Shows');
      container.innerHTML = '';
      for (let i = 0; i < 5; i += 1) {
        const div = document.createElement('div');
        div.classList.add('showitem');
        div.innerHTML = `<span>ID: ${shows[i].id}</span> <span>"Name: ${shows[i].name}</span>`;
        div.innerHTML += `<span> <a id="${shows[i].id}" href="${shows[i].url}"><img src="${shows[i].image.medium}" width="200"></a></span>`;

        div.innerHTML += `<span class= "userInterAct"><button class="commentBtn btn-${shows[i].id}">comment</button><i class="fas fa-heart" data-id="${shows[i].id}"></i></span>`;

        container.appendChild(div);
        message('Refreshed ok!', 'black');
      }
    } else {
      message(`API request error: ${response.status}`);
    }
  } catch (error) {
    message(`API request failed: ${error}`);
  }
};