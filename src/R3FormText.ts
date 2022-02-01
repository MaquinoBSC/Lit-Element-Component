import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class R3FormText extends LitElement {
  static styles = css`
  `;

  @property({ type: String }) description = 'Default Text';
  @property({ type: String, attribute: 'description-type' }) descriptionType = 'info';
  @property({ type: String }) label = "Default Text";
  @property({ type: String }) placeholder= "Default Text";
  @property({ type: Boolean, attribute: 'with-description'}) withDescription= false;
  @property({ type: Boolean, attribute: 'with-Label'}) withLabel= false;

  get _getLabel(){
    return this.withLabel ? html`<label id="label"> ${this.label} </label>` : '';
  }

  get _getDescription(){
    return this.withDescription ? html`<label id="description"> ${this.description} </label>` : '';
  }

  get _getInput(){
    return html`<input type="text" placeholder="${this.placeholder}" id="input" />`;
  }

  render() {
    return html`
      ${this._getLabel}
      ${this._getInput}
      ${this._getDescription}
    `;
  }
}
