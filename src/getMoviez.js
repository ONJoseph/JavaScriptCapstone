export const showsList = [];
const frontmoviez = document.querySelector('.Shows');
const modalPopUp = document.querySelector('.modal');

const popShow = (arr) => {
  frontmoviez.innerHTML = '';
  arr.forEach((movie) => {
    const eachMovie = `<div class=movie id=${movie.id}>
           <h2 class="movie-title">${movie.name}</h2>
           <img class="movie-image" src=${movie.image.medium}>
           <div class= "userInterAct">
             <button class="comment-btn" value="${movie.id}">Comment</button>
             <i class="fas fa-heart" data-id="${movie.id}"></i>
          </div>
        </div>`;
    frontmoviez.insertAdjacentHTML('beforeend', eachMovie);
  });
};

export function createModal(showID) {
  const closeBtn = document.getElementsByClassName('close-btn');
  modalPopUp.style.display = 'block';
  modalPopUp.style.width = '90vw';
  modalPopUp.style.height = '90vh';
  modalPopUp.style.backgroundColor = '#f6f6f6';
  const content = `
  <div class="show-container">
    <span class="close-btn">×</span>
    <div class="show-info">
      <div class="poster">
        <img src="${showsList[showID].image.medium}", alt="movie poster">
      </div>
      <div class="details">
        <h1>${showsList[showID].name}</h1>
        <h2>Summary:</h2>
        <p>${showsList[showID].summary}</p>
        <div class="meta">
          <div class="left-side">
            <span>Language: ${showsList[showID].language}</span>
            <span>Genre: ${showsList[showID].genres}</span>
          </div>
          <div class="right-side">
            <span>Rating: ${showsList[showID].rating.average}</span>
            <span>Premiered: ${showsList[showID].premiered}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="comments-section">
      <h2>Comments <span class="comments-count"> </span></h2>
      <div class="comments-list"></div>
      <h3>Add a new comment</h3>
      <form id="form">
        <input type="text" placeholder="Your name" id="name">
        <textarea id="comment-text" placeholder="Your comment" maxlength="500" rows="4"></textarea>
        <button id="submit-btn" type="submit">Comment</button>
      </form>
    </div>
  </div>
  `;
  modalPopUp.innerHTML = content;
  closeBtn[0].addEventListener('click', () => {
    modalPopUp.style.display = 'none';
  });
}

export default async function getShows() {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  for (let i = 0; i < 16; i += 1) {
    showsList.push(data[i]);
  }
  popShow(showsList);
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((btn) => {
    const ID = btn.value;
    btn.addEventListener('click', () => {
      createModal(ID - 1);
    });
  });
  return showsList;
}