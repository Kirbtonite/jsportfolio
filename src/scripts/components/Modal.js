export default class Modal {
  constructor(element) {
    this.element = element;
    this.modals = this.element.querySelectorAll('.js-modal');
    this.modal = document.querySelector('.modal');
    this.closeModalBTN = document.querySelector('.close-modal');
    this.image = document.createElement('img');

    this.init();
  }
  init() {
    // for loop to make images clickable and open a modal / boucle for pour rendre les images cliquables et ouvrent une modale
    for (let i = 0; i < this.modals.length; i++) {
      const modal = this.modals[i];
      modal.addEventListener('click', this.openModal.bind(this));
    }
  }
  openModal(event) {
    for (let i = 0; i < this.modals.length; i++) {
      // get the source of the clicked image / cherche la source de l'image cliqué
      const chemin = event.target.getAttribute('src');
      // change the image source with the clicked image / changer la source d'image avec l'image cliqué
      this.image.setAttribute('src', chemin);
      // add image to the div.modal / ajouter l'image à la balise div.modal
      this.modal.appendChild(this.image);
      // make the modal visible / rendre la modale visible
      this.modal.classList.add('visible');
      // make the X button on the modal clickable / rendre le bouton X cliquable
      this.closeModalBTN.addEventListener('click', this.closeModal.bind(this));
    }
  }
  closeModal() {
    // close the modal / fermer la modale
    this.modal.classList.remove('visible');
  }
}
