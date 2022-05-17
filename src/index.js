import './style.css';
import logo from './logoImg.jpg';
import getShows from './getMoviez.js';

// Add logo img

const element = document.querySelector('.logoContainer');
const mylogo = new Image();
mylogo.className = 'logo';
mylogo.src = logo;

element.append(mylogo);

getShows();
