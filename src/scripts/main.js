'use strict';

const copy = document.getElementById('copy');
const code = document.getElementById('code');

const copyToClipboard = () => {
  code.select();
  code.setSelectionRange(0, 99999);
  document.execCommand('copy');
};

copy.addEventListener('click', () => {
  copyToClipboard();
});
