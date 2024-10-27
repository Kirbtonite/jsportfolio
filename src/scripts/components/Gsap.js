import { gsap } from 'gsap';

import { Draggable } from 'gsap/Draggable';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(Draggable, TextPlugin);
export default class Gsap {
  constructor() {
    this.text = document.querySelector('.tagline');
    this.gif = document.querySelector('.drag-gif');
    this.init();
  }
  init() {
    if (this.gif) {
      this.draggableElement();
    }
    if (this.text) {
      this.changeText();
    }
  }

  draggableElement() {
    // make element draggrable with the mouse / rendre l'élément déplaçable avec la souris
    Draggable.create('.drag-gif', {
      inertia: true,
    });
  }
  changeText() {
    // swap text / échanger le texte
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      delay: 1,
      yoyo: true,
    });
    tl.to('.tagline', { duration: 4, text: 'Intégrateur web junior' });
  }
}
