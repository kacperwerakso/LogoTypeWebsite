const logoTypeText = document.querySelector('.logoTypeText');
const textContentOflogoTypeText = 'OF YOUR DREAM';
const aboutUsText = document.querySelector('.aboutUsText')

const samples = document.querySelector('.samples');

const logos = [
  document.querySelector('#logo1'),
  document.querySelector('#logo2'),
  document.querySelector('#logo3'),
  document.querySelector('#logo4'),
  document.querySelector('#logo5'),
  document.querySelector('#logo6'),
  document.querySelector('#logo7'),
  document.querySelector('#logo8'),
  document.querySelector('#logo9'),
  document.querySelector('#logo10'),
  document.querySelector('#logo11'),
  document.querySelector('#logo12')
];

window.addEventListener('scroll', showSamples);

function showSamples() {
  const imagePosition = samples.getBoundingClientRect().top;

  if (imagePosition < 400) {
    logos.forEach((logo, index) => {
      setTimeout(() => {
        logo.classList.add('slideIn');
      }, index * 150);
    });
  }
}


function revealText(index) {
    setTimeout(() => {
        const span = document.createElement('span');
        span.textContent = textContentOflogoTypeText[index];
        span.style.animation = 'revealLetter 0.4s ease forwards';
        logoTypeText.appendChild(span);
    }, index * 80);
}

for (let i = 0; i < textContentOflogoTypeText.length; i++) {
    revealText(i);
}


const cookieAcceptButton = document.querySelector("#cookieAcceptId");


if (localStorage.getItem("cookieAccepted")) {
  hideCookieBanner();
} else {
  cookieAcceptButton.addEventListener("click", function() {
    localStorage.setItem("cookieAccepted", "true");
    hideCookieBanner();
  });
}

function hideCookieBanner() {
  const cookieBanner = document.querySelector(".cookie");
  if (cookieBanner) {
    cookieBanner.style.display = "none";
  }
}










