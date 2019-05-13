import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'mat-card'
})
export class MatCard {

    @Prop() variant: 'outlined' | 'basic' = 'basic';

    render() {
        const classes = `mdc-card mdc-card--${this.variant}`;

        return (
            <div class={classes}><slot></slot></div>
        );
    }

}