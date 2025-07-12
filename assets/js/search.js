document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  // Sample data - replace with your actual data loading
  const searchData = [
    {
      url: "https://example.com/page1",
      title: "Sample Page 1",
      description: "This is the first sample page"
    },
    {
      url: "https://example.com/page2",
      title: "Sample Page 2",
      description: "This is the second sample page"
    }
  ];

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    if (query.length < 2) {
      searchResults.style.display = 'none';
      return;
    }

    const results = searchData.filter(item => {
      return item.title.toLowerCase().includes(query) || 
             item.description.toLowerCase().includes(query);
    }).slice(0, 5);

    displayResults(results);
  });

  function displayResults(results) {
    if (!results.length) {
      searchResults.innerHTML = '<div class="search-result">No results found</div>';
      searchResults.style.display = 'block';
      return;
    }

    searchResults.innerHTML = results.map(item => `
      <div class="search-result">
        <a href="${item.url}" target="_blank">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <small>${item.url}</small>
        </a>
      </div>
    `).join('');

    searchResults.style.display = 'block';
  }

  // Close results when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target !== searchInput) {
      searchResults.style.display = 'none';
    }
  });
});