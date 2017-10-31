function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const rank = document.querySelectorAll('ul.ranked-list li');
  console.log(rank);
  for(let i = 0; i < rank.length ; i++){
    rank[i].innerHtml = parseInt(rank[i].innerHtml) + n;
  }
}

function deepestChild() {

}
