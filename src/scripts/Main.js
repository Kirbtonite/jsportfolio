import ComponentFactory from './ComponentFactory';
import Lottie from './Lottie';
import Icons from './utils/Icons';

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');

    new ComponentFactory();
    new Lottie();

    Icons.load();
  }
}
new Main();
