export default [
  {
    comment: 'Its Awesome',
    creation_date: '2022-04-05',
    username: 'Joseph',
  },
  {
    comment: 'This is really wonderful!',
    creation_date: '2022-03-09',
    username: 'Aldo',
  },
  {
    comment: 'Wondering what space looks like! Watch this!!',
    creation_date: '2022-05-10',
    username: 'Excel',
  },
  {
    comment: 'This is great!',
    creation_date: '2022-04-05',
    username: 'Dan',
  },
  {
    comment: 'I am going to see this awesome movie again!!',
    creation_date: '2022-03-08',
    username: 'Mavin',
  },
];

function updateCounter() {
  const allComments = document.getElementsByClassName('single-comment');
  const counter = allComments.length;
  const commentsCounter = document.getElementsByClassName('comments-count');
  commentsCounter[0].innerText = `(${counter})`;
  const updatedCounter = commentsCounter;
  return updatedCounter;
}
export const updateCounter = updatedCounter;
