import { gsap } from 'gsap';
export default class Gsap {
  constructor() {
    this.init();
  }
  init() {
    gsap.to('.ball', {
      duration: 2,
      x: 250,
      rotation: 360,
    });
  }
}
