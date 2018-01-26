import {myButton, myParagraph} from './poipo-dom-loader.js';

var showParagraph = false;

myButton.addEventListener('click', toggleState);

function toggleState() {
  showParagraph = !showParagraph;
  updateParagraph();
  updateButton();
}

function updateParagraph() {
  if(showParagraph) {
    myButton.textContent = 'Hide Paragraph';
  } else {
    myButton.textContent = 'Show Paragraph';
  }
}

function updateButton() {
  if(showParagraph) {
    myParagraph.textContent = 'Hay hay hay hay... Thanks for clicking the button...:D';
  } else {
    myParagraph.textContent = 'Please click the button';
  }
}