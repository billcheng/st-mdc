import { Component, Prop } from '@stencil/core';
import { MDCFormField } from '@material/form-field';
import { MDCCheckbox } from '@material/checkbox';

@Component({
    tag: 'mat-checkbox'
})
export class MatCheckbox {

    @Prop() checked?: 'on' | 'off' | 1 | 0;

    static ID = 1;

    formFieldElement: HTMLDivElement;
    checkBoxElement: HTMLDivElement;
    id: string;

    constructor() {
        this.id = MatCheckbox.getId();
    }

    componentDidLoad() {
        const checkbox = new MDCCheckbox(this.checkBoxElement);
        const formField = new MDCFormField(this.formFieldElement);
        formField.input = checkbox;

        const checked = this.checked || 0;
        checkbox.checked = checked==='on' || checked===1;
    }

    render() {
        return (
            <div class="mdc-form-field" ref={e=>this.formFieldElement=e}>
                <div class="mdc-checkbox" ref={e=>this.checkBoxElement=e}>
                    <input type="checkbox"
                        class="mdc-checkbox__native-control"
                        id={this.id} />
                    <div class="mdc-checkbox__background">
                        <svg class="mdc-checkbox__checkmark"
                            viewBox="0 0 24 24">
                            <path class="mdc-checkbox__checkmark-path"
                                fill="none"
                                d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                        </svg>
                        <div class="mdc-checkbox__mixedmark"></div>
                    </div>
                </div>
                <label htmlFor={this.id}><slot></slot></label>
            </div>
        );
    }

    static getId() {
        return `checkbox-${this.ID++}`;
    }
}