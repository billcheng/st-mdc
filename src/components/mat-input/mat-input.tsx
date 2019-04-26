import { Component, Prop } from '@stencil/core';
import { MDCTextField } from '@material/textfield';

@Component({
    tag: 'mat-input'
})
export class MatInput {

    @Prop() placeholder: string;
    @Prop() hint: string;

    ref: HTMLElement;

    componentDidLoad() {
        new MDCTextField(this.ref);
    }

    render() {

        return (
            <div>
                <div class="mdc-text-field" ref={e => this.ref = e}>
                    <input class="mdc-text-field__input" />
                    <div class="mdc-line-ripple"></div>
                    <label class="mdc-floating-label">{this.placeholder}</label>
                </div>
                {
                    this.hint &&
                    <div class="mdc-text-field-helper-line">
                        <div class="mdc-text-field-helper-text">{this.hint}</div>
                    </div>
                }
            </div>
        );
        
    }

}