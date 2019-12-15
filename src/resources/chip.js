import { bindable, customElement } from 'aurelia-framework';

@customElement('chip')
export class Chip {
    @bindable text;
    @bindable disabled;
    @bindable onClick;
    @bindable onClose;

    click() {
        if (this.onClick) {
            this.onClick()
        }
    }

    close() {
        if (this.onClose) {
            this.onClose();
        }
    }
}
