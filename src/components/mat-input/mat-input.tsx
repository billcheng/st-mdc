import { Component, Prop } from '@stencil/core';
import { MDCTextField } from '@material/textfield';
import { MatInputVariant } from '../../models/mat-input-variant';

@Component({
    tag: 'mat-input'
})
export class MatInput {

    @Prop() placeholder: string;
    @Prop() hint: string;
    @Prop() variant: MatInputVariant='Filled';

    ref: HTMLElement;

    componentDidLoad() {
        new MDCTextField(this.ref);
    }

    render() {
        
        const textFieldClasses = ['mdc-text-field'];
        if (this.variant==='Outlined')
            textFieldClasses.push('mdc-text-field--outlined');

        const label = this.variant==='Filled'?
        [
        <div class="mdc-line-ripple"></div>,
        <label class="mdc-floating-label">{this.placeholder}</label>
        ]
        :
        <div class="mdc-notched-outline">
            <div class="mdc-notched-outline__leading"></div>
            <div class="mdc-notched-outline__notch">
              <label class="mdc-floating-label">{this.placeholder}</label>
            </div>
            <div class="mdc-notched-outline__trailing"></div>
        </div>
        ;

        return (
            <div>
                <div class={textFieldClasses.join(' ')} ref={e => this.ref = e}>
                    <input class="mdc-text-field__input" />
                   {label} 
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