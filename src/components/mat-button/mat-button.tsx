import { Component, Element, Prop } from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { ButtonVariant } from '../../models/button-variant';

@Component({
    tag: 'mat-button'
})
export class MatButton {

    @Prop() variant: ButtonVariant;
    @Element() element: HTMLElement;

    componentDidLoad() {
        new MDCRipple(this.element.querySelector('button'));        
        const icon = this.element.querySelector('mat-icon > i');
        if (icon) {
            icon.classList.add('mdc-button--icon');
        }
    }

    render() {

        const classes = ['mdc-button', `mdc-button--${this.variant || 'text'}`];

        return (
            <button class={classes.join(' ')}><slot /></button>
        );
    }

}