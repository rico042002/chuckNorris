const button = document.getElementById('joke-btn');
button.addEventListener('click', getJokes);
function getJokes() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    // check status
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      const div = document.querySelector('.joke');
      div.innerHTML = data.value;
    }
  };
  xhr.send();
}
window.onloadstart(getJokes());
