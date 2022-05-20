export default function itemCounter() {
  const items = document.querySelectorAll('.movie-title').length;
  return items;
}