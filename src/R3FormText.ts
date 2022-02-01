import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import style from './R3FormTextStyle';

export class R3FormText extends LitElement {
  static styles = [style];

  @property({ type: String }) description = 'Default Text';
  @property({ type: String, attribute: 'description-type' }) descriptionType = 'info';
  @property({ type: String }) label = "Default Text";
  @property({ type: String }) placeholder= "Default Text";
  @property({ type: Boolean, attribute: 'with-description'}) withDescription= false;
  @property({ type: Boolean, attribute: 'with-label'}) withLabel= false;

  get _getLabel(){
    return this.withLabel ? html`<label id="label"> ${this.label} </label>` : '';
  }

  get _getDescription(){
    return this.withDescription ? html`<label id="description" class="${this.descriptionType}"> ${this.description} </label>` : '';
  }

  get _getInput(){
    return html`<input type="text" placeholder="${this.placeholder}" id="input" />`;
  }

  render() {
    return html`
      <div class="container">
        ${this._getLabel}
        ${this._getInput}
        ${this._getDescription}
      </div>
    `;
  }
}
