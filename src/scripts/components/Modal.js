export default class Modal {
  constructor(element) {
    this.element = element;
    this.modals = this.element.querySelectorAll('.js-modal');
    this.modal = document.querySelector('.modal');
    this.closeModalBTN = document.querySelector('.close-modal');
    this.image = document.createElement('img');
    /*  this.text = document.createElement('p'); */

    this.init();
  }
  init() {
    for (let i = 0; i < this.modals.length; i++) {
      const modal = this.modals[i];
      modal.addEventListener('click', this.openModal.bind(this));
    }
  }
  openModal(event) {
    for (let i = 0; i < this.modals.length; i++) {
      const chemin = event.target.getAttribute('src');
      this.image.setAttribute('src', chemin);
      /*       const nom = event.target.getAttribute('alt');
      console.log(nom);
      if (nom == 'css form') {
        this.text.textContent = 'Code CSS pour les inputs fields du formulaire';
      } else if (nom == 'html form') {
        this.text.textContent = 'Structure HTML pour le formulaire';
      } else if (nom == 'js video') {
        this.text.textContent =
          'Script pour imbed une vidéo YouTube dans la page web';
      } else if (nom == 'js header') {
        this.text.textContent =
          'Script pour faire le header dynamique et responsive pour le mobile.';
      }

      this.modal.appendChild(this.text);
      this.text.classList.add('visible'); */

      this.modal.appendChild(this.image);
      this.modal.classList.add('visible');

      this.closeModalBTN.addEventListener('click', this.closeModal.bind(this));
    }
  }
  closeModal() {
    this.modal.classList.remove('visible');
    /*  this.text.classList.remove('visible'); */
  }
}
