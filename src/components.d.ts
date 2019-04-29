/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  ButtonVariant,
} from './models/button-variant';
import {
  MatInputVariant,
} from './models/mat-input-variant';


export namespace Components {

  interface MatButton {
    'variant': ButtonVariant;
  }
  interface MatButtonAttributes extends StencilHTMLAttributes {
    'variant'?: ButtonVariant;
  }

  interface MatIconButton {
    'ariaLabel': string;
    'icon': string;
    'toggle'?: boolean;
  }
  interface MatIconButtonAttributes extends StencilHTMLAttributes {
    'ariaLabel'?: string;
    'icon'?: string;
    'toggle'?: boolean;
  }

  interface MatIcon {}
  interface MatIconAttributes extends StencilHTMLAttributes {}

  interface MatInput {
    'hint': string;
    'placeholder': string;
    'variant': MatInputVariant;
  }
  interface MatInputAttributes extends StencilHTMLAttributes {
    'hint'?: string;
    'placeholder'?: string;
    'variant'?: MatInputVariant;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MatButton': Components.MatButton;
    'MatIconButton': Components.MatIconButton;
    'MatIcon': Components.MatIcon;
    'MatInput': Components.MatInput;
  }

  interface StencilIntrinsicElements {
    'mat-button': Components.MatButtonAttributes;
    'mat-icon-button': Components.MatIconButtonAttributes;
    'mat-icon': Components.MatIconAttributes;
    'mat-input': Components.MatInputAttributes;
  }


  interface HTMLMatButtonElement extends Components.MatButton, HTMLStencilElement {}
  var HTMLMatButtonElement: {
    prototype: HTMLMatButtonElement;
    new (): HTMLMatButtonElement;
  };

  interface HTMLMatIconButtonElement extends Components.MatIconButton, HTMLStencilElement {}
  var HTMLMatIconButtonElement: {
    prototype: HTMLMatIconButtonElement;
    new (): HTMLMatIconButtonElement;
  };

  interface HTMLMatIconElement extends Components.MatIcon, HTMLStencilElement {}
  var HTMLMatIconElement: {
    prototype: HTMLMatIconElement;
    new (): HTMLMatIconElement;
  };

  interface HTMLMatInputElement extends Components.MatInput, HTMLStencilElement {}
  var HTMLMatInputElement: {
    prototype: HTMLMatInputElement;
    new (): HTMLMatInputElement;
  };

  interface HTMLElementTagNameMap {
    'mat-button': HTMLMatButtonElement
    'mat-icon-button': HTMLMatIconButtonElement
    'mat-icon': HTMLMatIconElement
    'mat-input': HTMLMatInputElement
  }

  interface ElementTagNameMap {
    'mat-button': HTMLMatButtonElement;
    'mat-icon-button': HTMLMatIconButtonElement;
    'mat-icon': HTMLMatIconElement;
    'mat-input': HTMLMatInputElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
