import { Component } from '@stencil/core';

@Component({
    tag: 'mat-card-actions',
})
export class MatCardActions {

    render() {
        return (
            <div class="mdc-card__actions">
                <div class="mdc-card__action-buttons">
                    <slot name="buttons"></slot>
                </div>
                <div class="mdc-card__action-icons">
                    <slot name="icons"></slot>
                </div>
            </div>
        );
    }
}