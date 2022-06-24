const RecentScores = [
  {
    name: 'abel',
    score: '100',
  },
  {
    name: 'nadia',
    score: '20',

  },
  {
    name: 'nonde',
    score: '50',

  },
  {
    name: 'tbello',
    score: '78',

  },
  {
    name: 'z',
    score: '125',

  },
  {
    name: 'eerer',
    score: '100',

  },

];

export default RecentScores;
let recentScore =[
  {
  "name": "abel",
 "score": 100
},
{
     "name": "nadia",
      "score": 20
},
{
  "name": "nadia",
   "score": 20
},
{
  "name": "nadia",
   "score": 20
},
{
  "name": "nadia",
   "score": 20
},
{
  "name": "nadia",
   "score": 20
}
]
async function populate(){
  const requestURL = '';
  const request = new Request(requestURL);
  const superHeroes =await Response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes)
}