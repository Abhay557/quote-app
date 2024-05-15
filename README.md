# quote-app
an web-app which displays quotes using api data 

### About concept
- its fetches the api and display the quotes in container.
- with the help of body tag and display (flex) properties i have centered both div and content.
- in javascript i used the DOM  (Document Object Model) concept to display that data on a webpage.
```js
  document.addEventListener('DOMContentLoaded', function () {
  fetch('https://random-api.xyz/api/fun/fortune')
    .then(response => response.json())
    .then(data => {
      const apiDataElement = document.getElementById('apiData');
      apiDataElement.textContent = JSON.stringify(data.fortune);
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching API data:', error);
    });
  });
```

### API
- [link to api](https://docs.random-api.xyz)
