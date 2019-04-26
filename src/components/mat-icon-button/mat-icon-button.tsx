import { Component, Prop, Element } from '@stencil/core';
import { MDCIconButtonToggle } from '@material/icon-button';
import { MDCRipple } from '@material/ripple';

@Component({
    tag: 'mat-icon-button'
})
export class MatIconButton {

    @Prop({ attr: 'aria-label' }) ariaLabel: string;
    @Prop() icon: string;
    @Prop() toggle?: boolean = false;
    button: HTMLButtonElement;

    componentDidLoad() {
        new MDCIconButtonToggle(this.button);
        new MDCRipple(this.button);
    }

    render() {
        return (
            <button ref={e => this.button = e}
                class="mdc-icon-button"
                aria-label={this.ariaLabel}
                aria-hidden="true"
                aria-pressed="false">
                <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">{this.onIcon}</i>
                <i class="material-icons mdc-icon-button__icon">{this.icon}_border</i>
            </button>
        );
    }

    get onIcon() {
        return `${this.icon}${this.toggle ? '' : '_border'}`;
    }

}