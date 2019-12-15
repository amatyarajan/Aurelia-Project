  export class SquareCustomAttribute {
    static inject = [Element];
  
    constructor(element){
      this.element = element;
      this.element.style.width = this.element.style.height = '100px';
    }
  
    bind() {
      this.element.style.backgroundColor = this.value;
    }
  }
  

  
