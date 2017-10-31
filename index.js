function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const rank = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < rank.length ; i++){
    rank[i].textContent = (parseInt(rank[i].textContent) + n).toString();
  }
}

function deepestChild() {
  
}
