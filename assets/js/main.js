const number = document.getElementById('number');

fetch('https://sheetdb.io/api/v1/uzkvj9aa7hikd/count')
  .then((response) => response.json())
  .then((data) => number.innerHTML = data.rows);