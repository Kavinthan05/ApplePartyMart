const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Sample data for demonstration purposes
const data = [
    'Balloons',
    'Party Decorations',
    'Gifts'
];

function displayResults(results) {
    // Clear previous results
    searchResults.innerHTML = '';

    // Display new results
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        searchResults.appendChild(li);
    });
}

function handleSearch() {
    const query = searchInput.value.toLowerCase();
    const results = data.filter(item => item.toLowerCase().includes(query));
    displayResults(results);
}

searchInput.addEventListener('input', handleSearch);
