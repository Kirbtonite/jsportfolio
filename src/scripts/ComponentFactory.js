// importer vos composantes ici
import Header from './components/Header';
import Scrolly from './components/Scrolly';
import Carousel from './components/Carousel';
import Youtube from './components/Youtube';
import Form from './components/Form';
import Modal from './components/Modal';
import Gsap from './components/Gsap';
export default class ComponentFactory {
  constructor() {
    // array of instances of components / tableau d`instances des composantes
    this.componentInstances = [];
    // list of components used / liste des composantes utilitées
    this.componentList = {
      Youtube,
      Carousel,
      Header,
      Scrolly,
      Form,
      Modal,
      Gsap,
    };
    this.init();
  }
  init() {
    // get all 'data-component' in a html page / obtenir tous les 'data-component' dans une page html
    const components = document.querySelectorAll('[data-component]');
    //for loop to initiate all components individually / boucle for pour initié tous les composantes individuellement
    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;
      // add if statement to check if component exist / ajout d'une déclaration if pour vérifier si la composante existe
      if (this.componentList[componentName]) {
        const instance = new this.componentList[componentName](element);
        this.componentInstances.push(instance);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
