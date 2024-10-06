import { gsap } from 'gsap';

import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Flip, ScrollTrigger, Draggable);
export default class Gsap {
  constructor() {
    this.init();
    /*  this.checkWindowSize = setInterval(this.responsiveAnimated, 1000); */
  }
  init() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.ball',
          scrub: true,
        },
      })
      .to('.ball', {
        x: 100,
        rotation: 360,
      })
      .to('.ball', {
        x: 200,
        rotation: 720,
      });

    Draggable.create('.crown', {
      inertia: true,
    });
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
