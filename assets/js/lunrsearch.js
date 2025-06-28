let idx = null;
let data = null;

fetch('/search.json')
    .then(response => response.json())
    .then(rawData => {
        data = rawData;
        idx = lunr(function () {
            this.ref('id');
            this.field('title');
            this.field('content');

            data.forEach((doc, i) => {
                doc.id = i;
                this.add(doc);
            });
        });
    });

document.getElementById('search-box').addEventListener('input', function () {
    const query = this.value;
    const results = idx.search(query);
    const resultContainer = document.getElementById('results');
    resultContainer.innerHTML = '';

    results.forEach(result => {
        const item = data[result.ref];
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        resultContainer.appendChild(li);
    });

    if (results.length === 0 && query.length > 0) {
        resultContainer.innerHTML = '<li>No results found</li>';
    }
});
