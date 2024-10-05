import ComponentFactory from './ComponentFactory';
import Lottie from './Lottie';
import Icons from './utils/Icons';
import Gsap from './Gsap';
class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');
    new Gsap();
    new ComponentFactory();
    new Lottie();

    Icons.load();
  }
}
new Main();
