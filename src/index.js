import RecentScores from './RecentScore';
import './style.css';
// const form = document.getElementById('form');
const submit = document.getElementById('submit');
const show = (name, score) => {
  document.querySelector('#list').innerHTML += `<ul>
      <li>${name}:${score}</li></ul>`;
};

submit.addEventListener('click', (e)=>{
  const user = document.getElementById('name');
const score = document.getElementById('scores');
e.preventDefault();
fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BOUn8Q1RJFJNdl1yLZrm/scores",{
  method:'POST',
  body:JSON.stringify({
      user: user.value.trim(),
      score: score.value.trim(),
      }),
  headers:{
      "content-Type": "application/json; charset=UTF-8"
  },
})
.then((response) => response.json())
.then((data) => {
console.log(data);
});
user.value = '';
score.value = '';
});
async function getScore() {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BOUn8Q1RJFJNdl1yLZrm/scores';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const scores = await response.json();
  const {result } = scores;
  document.querySelector('#list').innerHTML = '';
  result.forEach((score) => {
    show(score.user, score.score);
  });
}

refresh.addEventListener('click', getScore);