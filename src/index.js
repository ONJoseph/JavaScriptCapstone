import './style.css';
import refresh from './modules/refresh.js';

const moviesBtn = document.getElementById('movies');

moviesBtn.addEventListener('click', refresh);
