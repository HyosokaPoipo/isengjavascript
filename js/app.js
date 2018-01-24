var showParagraph = false;

myButton.addEvenListener('click', toggleState);

function toggleState() {
  showParagraph = !showParagraph;
  updateParagraph();
  updateButton();
}

function updateParagrapth() {
  if(showParagraph) {
    myButton.textContent = 'Hide Paragraph';
  } else {
    myButton.textContent = 'Show Paragraph';
  }
}

function updateButton() {
  if(showParagraph) {
    myParagraph.textContent = 'Paragraph content is showing';
  } else {
    myParagraph.textContent = 'Paragraph content is not showed';
  }
}