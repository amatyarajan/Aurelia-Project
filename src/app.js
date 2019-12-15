import { PLATFORM } from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'Home', moduleId: PLATFORM.moduleName('home/home'), nav:true, title:'Home' },
      { route: 'travel', name: 'Travel', moduleId: PLATFORM.moduleName('home/travel'), nav:false, title:'Travel' },
      { route: 'my-modal', name: 'Modal', moduleId: PLATFORM.moduleName('modal/my-modal'), nav:true, title:'Modal'},
      { route: 'todo', name: 'Todo', moduleId: PLATFORM.moduleName('todo/todo'), nav:true, title:'Todo' },
      { route: 'apple', name: 'Apple', moduleId: PLATFORM.moduleName('apple'), nav:true, title:'Apple' },
      { route: 'tutorial', name: 'Tutorial', moduleId: PLATFORM.moduleName('tutorial'), nav:true, title:'Tuture' },
      { route: 'rajan', name: 'rajan', moduleId: PLATFORM.moduleName('rajan/rajan'), nav:true, title:'Rajan' },
    ]);
  }
}
