'use strict';

const Parallax = require('parallax-js');

const copy = document.getElementById('copy');
const code = document.getElementById('code');
const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene, {
  relativeInput: true,
});

parallaxInstance.friction(0.1, 0.1);

const copyToClipboard = () => {
  code.select();
  code.setSelectionRange(0, 99999);
  document.execCommand('copy');
};

const pushNotification = (title, type) => {
  copy.insertAdjacentHTML('afterbegin',
    `<div
      class="notification ${type}"
    >
      <h2 class="title">${title}</h2>
    </div>`);
};

copy.addEventListener('click', () => {
  copyToClipboard();

  pushNotification(`The Code is copied`, 'success');

  setTimeout(() => document.querySelector('.notification').remove(), 2000);
});
