import { gsap } from 'gsap';

import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(Flip, ScrollTrigger, Draggable, TextPlugin);
export default class Gsap {
  constructor() {
    this.init();
    /*  this.checkWindowSize = setInterval(this.responsiveAnimated, 1000); */
  }
  init() {
    this.animationScrollTrigger();
    this.draggableElement();
    this.changeText();
  }
  animationScrollTrigger() {
    /*     gsap
      .timeline({
        scrollTrigger: {
          trigger: '.left',
          scrub: true,
        },
      })
      .to('.left', {
        x: -100,
      })
      .to('.left', {
        x: 200,
      }); */
  }
  draggableElement() {
    Draggable.create('.drag-gif', {
      inertia: true,
    });
  }
  changeText() {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to('.tagline', { duration: 2, text: 'Intégrateur web junior' });
  }
  responsiveAnimated() {
    this.vw = window.innerWidth;
    console.log(this.vw);
    const softwares = document.querySelector('.grid__softwares');
    const state = Flip.getState('.grid__softwares, .software');
    if (this.vw <= 1000) {
      softwares.classList.add('reorder');
      Flip.from(state, {
        // uses position: absolute during the flip to work around flexbox challenges
        duration: 0.2,
        stagger: 0.1,
        ease: 'power1.inOut',
        // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc.
      });
    } else {
      softwares.classList.remove('reorder');
      Flip.from(state, {
        // uses position: absolute during the flip to work around flexbox challenges
        duration: 0.2,
        stagger: 0.1,
        ease: 'power1.inOut',
        // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc.
      });
    }
  }
}
