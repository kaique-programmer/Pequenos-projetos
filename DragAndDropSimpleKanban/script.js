// debug app 
function log(message) {
  console.log(' -- ' + message)
}

const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

// our cards
cards.forEach(card => {
  card.addEventListener('dragstart', dragstartCard)
  card.addEventListener('drag', dragCard)
  card.addEventListener('dragend', dragendCard)
})

function dragstartCard() {
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

  this.classList.add('is-dragging') // this = card
}

function dragCard() {
  //log('Card: Is dragging')
}

function dragendCard() {
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

  this.classList.remove('is-dragging') // this = card
}

// place where we will drop the cards

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenterCard) // The names of functions may to be same javascript
  dropzone.addEventListener('dragover', dragoverCard)
  dropzone.addEventListener('dragleave', dragleaveCard)
  dropzone.addEventListener('drop', dropCard)
})

function dragenterCard(){
  //log('Dropzone: enter in zone')
}

function dragoverCard(){
  this.classList.add('over') // this = dropzone

  const cardBeingDragged = document.querySelector('.is-dragging');

  this.appendChild(cardBeingDragged) // this = dropzone
}

function dragleaveCard(){
  this.classList.remove('over') // this = dropzone
}

function dropCard(){
  //log('Dropzone: stopped ')
}
