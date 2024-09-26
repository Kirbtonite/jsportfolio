import Lotty from './lotty';

export default class Lottie {
  constructor() {
    this.init();
  }

  init() {
    // Votre code pourrait commencer comme ceci
    const animation = Lotty.loadAnimation({
      container: document.querySelector('.animation'),
      path: '../assets/lottie/redhood.json',
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
  }
}
