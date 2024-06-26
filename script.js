document.addEventListener('DOMContentLoaded', function () {
  // Fetch API data
  fetch('https://random-api.xyz/api/fun/quote')
    .then(response => response.json())
    .then(data => {
      // Display data in the paragraph tag
      const apiDataElement = document.getElementById('apiData');
      apiDataElement.textContent = JSON.stringify(data.quote);
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching API data:', error);
    });
});
