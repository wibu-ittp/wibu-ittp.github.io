// Variables
const number = document.getElementById('number');
const loading = document.getElementById('loading');

// Loading
function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setOpacity(element, opacity) {
  element.style.transition = 'opacity 1s';
  element.style.opacity = opacity;
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setOpacity(loading, '0%');
  setInterval(function() {
    setVisible('#loading', false);
  }, 1000);
});

// Fetch
fetch('https://sheetdb.io/api/v1/uzkvj9aa7hikd/count', {
  method: 'GET',
  headers: {'Authorization': 'Bearer y790s151wmzi5zycqanb7ccz3rmw26vukfpq2g42'}
})
  .then((response) => response.json())
  .then((data) => number.innerHTML = data.rows + " 人 / orang");