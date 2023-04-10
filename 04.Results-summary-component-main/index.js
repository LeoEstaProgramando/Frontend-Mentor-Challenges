
const reactionScore = document.querySelector('#reaction-score');
const memoryScore = document.querySelector('#memory-score');
const verbalScore = document.querySelector('#verbal-score');
const visualScore = document.querySelector('#visual-score');

const reactionCategory = document.querySelector('#reaction-category');
const memoryCategory = document.querySelector('#memory-category');
const verbalCategory = document.querySelector('#verbal-category');
const visualCategory = document.querySelector('#visual-category');

const resultScore = document.querySelector('#result-score');

fetch('data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Manipula los datos JSON como desees
    
    reactionCategory.textContent = `${data[0].category}`
    reactionScore.textContent = `${data[0].score}`

    memoryCategory.textContent = `${data[1].category}`
    memoryScore.textContent = `${data[1].score}`

    verbalCategory.textContent = `${data[2].category}`
    verbalScore.textContent = `${data[2].score}`

    visualCategory.textContent = `${data[3].category}`
    visualScore.textContent = `${data[3].score}`

    resultScore.textContent = `${ Math.round((data[0].score + data[1].score + data[2].score + data[3].score) / 4) }`
  });