import { gsap } from 'gsap';

import { Draggable } from 'gsap/Draggable';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(Draggable, TextPlugin);
export default class Gsap {
  constructor() {
    this.init();
  }
  init() {
    this.draggableElement();
    this.changeText();
  }

  draggableElement() {
    Draggable.create('.drag-gif', {
      inertia: true,
    });
  }
  changeText() {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      delay: 1,
      yoyo: true,
    });
    tl.to('.tagline', { duration: 4, text: 'Intégrateur web junior' });
  }
}
