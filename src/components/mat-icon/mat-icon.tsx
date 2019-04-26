import { Component } from '@stencil/core';

@Component({
    tag: 'mat-icon',
})
export class MatIcon {
    
    render() {
        return (
            <i class="material-icons"><slot/></i>
        );
    }
}