
let idx = null;
let data = [];

fetch('/search.json')
  .then(response => response.json())
  .then(json => {
    data = json;
    idx = lunr(function () {
      this.ref('url');
      this.field('title');
      this.field('content');

      data.forEach(doc => this.add(doc));
    });
  });

document.getElementById('searchBox').addEventListener('input', function () {
  let query = this.value;
  let results = idx.search(query);
  let resultList = document.getElementById('results');
  resultList.innerHTML = '';

  results.forEach(result => {
    let item = data.find(d => d.url === result.ref);
    resultList.innerHTML += `<li><a href="${item.url}">${item.title}</a></li>`;
  });
});

