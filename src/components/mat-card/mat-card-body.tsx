import { Component, Prop } from '@stencil/core';


@Component({
    tag: 'mat-card-body'
})
export class MatCardBody {

    @Prop() title: string;
    @Prop() subtitle: string;
    @Prop() mediaUrl: string;
    @Prop() mediaScale: 'square' | '16-9' = 'square';

    render() {
        const mediaClasses = `mdc-card__media mdc-card__media--${this.mediaScale}`;

        return (
            <div class="mdc-card__primary-action" tabindex="0">
                {this.mediaUrl && <div class={mediaClasses} style={{ "background-image": `url("${this.mediaUrl}")` }}></div>}
                <div class="demo-card__primary">
                    <h2 class="mdc-typography mdc-typography--headline6">{this.title}</h2>
                    <h3 class="mdc-typography mdc-typography--subtitle2">{this.subtitle} {this.mediaUrl}</h3>
                </div>
                <div class="mdc-typography mdc-typography--body2"><slot></slot></div>
            </div>
        );
    }
}