import Lotty from './lotty';

export default class Lottie {
  constructor() {
    this.init();
  }

  init() {
    // render lotty animation / rendu animation lotty
    const animation = Lotty.loadAnimation({
      container: document.querySelector('.animation'),
      path: '../assets/lottie/redhood.json',
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
  }
}
