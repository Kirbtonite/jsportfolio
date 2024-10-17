import { gsap } from 'gsap';

import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(Flip, ScrollTrigger, Draggable, TextPlugin);
export default class Gsap {
  constructor() {
    this.init();
  }
  init() {
    this.animationScrollTrigger();
    this.draggableElement();
    this.changeText();
  }
  animationScrollTrigger() {}
  draggableElement() {
    Draggable.create('.drag-gif', {
      inertia: true,
    });
  }
  changeText() {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
      delay: 2,
      yoyo: true,
    });
    tl.to('.tagline', { duration: 2, text: 'Intégrateur web junior' });
  }
}
