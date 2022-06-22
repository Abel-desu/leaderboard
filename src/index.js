import RecentScores from './RecentScore'
import './style.css';
const show = (name, score) => {
    document.querySelector('#list').innerHTML += `<ul>
      <li>${name}:${score}</li></ul>`;
  };
  RecentScores.forEach((score) => {
    show(score.name, score.score);
  });