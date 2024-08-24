function fetchCatFacts() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('catFacts').innerHTML += `<li class="list-group-item">${data.fact}</li>`;
        })
        .catch(error => console.error('Error fetching cat facts:', error));
}

function fetchSpaceXData() {
    fetch('https://api.spacexdata.com/v4/launches/latest')
        .then(response => response.json())
        .then(data => {
            document.getElementById('spacexData').innerHTML += `<li class="list-group-item">Mission: ${data.name} - Date: ${new Date(data.date_utc).toDateString()}</li>`;
        })
        .catch(error => console.error('Error fetching SpaceX data:', error));
}

function fetchDogImages() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogImages').innerHTML += `<img src="${data.message}" class="img-fluid mb-3" alt="Random Dog Image">`;
        })
        .catch(error => console.error('Error fetching dog images:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    fetchCatFacts();
    fetchSpaceXData();
    fetchDogImages();
});
