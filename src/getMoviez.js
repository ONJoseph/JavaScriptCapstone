import { submitComment, displayComments } from './comments.js';
import itemCounter from './itemCounter.js';

export const showsList = [];
const frontmoviez = document.querySelector('.Shows');
const modalPopUp = document.querySelector('.modal');

const popShow = (arr) => {
  frontmoviez.innerHTML = '';
  arr.forEach((movie) => {
    const eachMovie = `
    <div class=movie id=${movie.id}>
      <h2 class="movie-title">${movie.name}</h2>
      <img class="movie-image" src=${movie.image.medium}>
      <div class= "userInterAct">
        <button class="comment-btn" value="${movie.id}">Comment</button>
        <i class="fas fa-heart" id="${movie.id}"></i>
      </div>
    </div>`;

    frontmoviez.insertAdjacentHTML('beforeend', eachMovie);
  });
};

function convertDate(date) {
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString();
  const dd = date.getDate().toString();
  const mmChars = mm.split('');
  const ddChars = dd.split('');
  return `${yyyy}-${mmChars[1] ? mm : `0${mmChars[0]}`}-${ddChars[1] ? dd : `0${ddChars[0]}`}`;
}

export function createModal(showID) {
  const closeBtn = document.getElementsByClassName('close-btn');
  modalPopUp.style.display = 'block';
  modalPopUp.style.width = '90vw';
  modalPopUp.style.height = '90vh';
  modalPopUp.style.backgroundColor = '#F6F6F6';
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
            <span>Genre: ${showsList[showID].genres[0]}, ${showsList[showID].genres[1]}, ${showsList[showID].genres[2]}</span>
          </div>
          <div class="right-side">
            <span>Rating: ${showsList[showID].rating.average}</span>
            <span>Premiered: ${showsList[showID].premiered}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="comments-section">
      <h2 class="comments-title">Comments <span class="comments-count" data-id=${showID + 1}></span></h2>
      <div class="comments-list"></div>
      <h3>Add a new comment</h3>
      <form id="form" data-id=${showID + 1}>
        <input type="text" placeholder="Your name" id="name" data-id=${showID + 1}>
        <textarea id="comment-text" data-id=${showID + 1} placeholder="Your comment" maxlength="500" rows="4"></textarea>
        <button id="submit-btn" type="submit" data-id=${showID + 1}>Comment</button>
      </form>
    </div>
  </div>
  `;
  modalPopUp.innerHTML = content;
  closeBtn[0].addEventListener('click', () => {
    modalPopUp.style.display = 'none';
  });
  const newPost = document.getElementById('form');
  newPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('name').value;
    const comment = document.getElementById('comment-text').value;
    // Post the comment on the DOM
    const singleComment = document.createElement('p');
    const todaysDate = new Date();
    const currentDate = convertDate(todaysDate);
    singleComment.innerText = `${currentDate}, ${userName}: ${comment}`;
    singleComment.classList.add('single-comment');
    const commentsList = document.querySelector('.comments-list');
    commentsList.appendChild(singleComment);
    // Update the comments counter
    const allComments = document.getElementsByClassName('single-comment');
    const counter = allComments.length;
    const commentsCounter = document.getElementsByClassName('comments-count');
    commentsCounter[0].innerText = `(${counter})`;
    // Submit the comment to API
    submitComment(`'${showID}'`, userName, comment);
    document.getElementById('name').value = '';
    document.getElementById('comment-text').value = '';
  });
  showID += 1;
  displayComments(`'${showID}'`);
}

const addlike = async (ID) => {
  const uri = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xyqrGgTcdx9Ydfnm5uk2/likes';
  const response = await fetch(uri, {
    method: 'POST',
    body: JSON.stringify({ item_id: ID }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  if (response.ok) {
    const likes = document.getElementById(`sp${ID}`).innerHTML;
    document.getElementById(`sp${ID}`).innerHTML = parseInt(likes, 10) + 1;
  }
};

export default async function getShows() {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  for (let i = 0; i < 16; i += 1) {
    showsList.push(data[i]);
  }
  popShow(showsList);
  document.querySelector('.label').innerHTML = `Items: ${itemCounter()}`;
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((btn) => {
    const ID = btn.value;
    btn.addEventListener('click', () => {
      createModal(ID - 1);
    });
  });

  let likearray = [];
  const uri = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xyqrGgTcdx9Ydfnm5uk2/likes';
  const response = await fetch(uri, {
    method: 'GET',
  });
  if (response.ok) {
    likearray = await response.json();
  } else {
    Error(`API request error: ${response.status}`);
  }

  const likeIcons = document.querySelectorAll('.fa-heart');
  likeIcons.forEach(async (icon) => {
    const ID = icon.id;
    const myarray = likearray.filter((element) => element.item_id === ID);
    icon.insertAdjacentHTML('afterend', `<span id="sp${ID}">${myarray[0].likes}</span>`);
    icon.addEventListener('click', () => {
      addlike(ID);
    });
  });
  return showsList;
}
