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
    for (let i = 0; i < this.modals.length; i++) {
      const modal = this.modals[i];
      modal.addEventListener('click', this.openModal.bind(this));
    }
  }
  openModal(event) {
    for (let i = 0; i < this.modals.length; i++) {
      const chemin = event.target.getAttribute('src');
      this.image.setAttribute('src', chemin);

      this.modal.appendChild(this.image);
      this.modal.classList.add('visible');

      this.closeModalBTN.addEventListener('click', this.closeModal.bind(this));
    }
  }
  closeModal() {
    this.modal.classList.remove('visible');
  }
}
