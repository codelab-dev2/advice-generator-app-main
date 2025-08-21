const adviceButton = document.querySelector('.box');
const adviceId = document.querySelector('.advice-id');
const adviceDetail = document.querySelector('.advice-detail');
const adviceDetailsDiv = document.querySelector('.advice-details-div');

adviceButton.addEventListener('click', () => {
  adviceDetail.textContent = "";

  const loader = document.createElement('div');
  loader.className = 'lds-dual-ring';
  adviceDetailsDiv.appendChild(loader);

  fetch('https://api.adviceslip.com/advice?' + new Date().getTime())
  .then(res => res.json())
  .then(data => {
    adviceId.textContent = "ADVICE #" + data.slip.id;
    adviceDetail.textContent = '"' + data.slip.advice + '"';
  })
  .catch(() => {
    adviceDetail.textContent = "Error! Try again.";
  })
  .finally(() => {
    loader.remove();
  });
});
