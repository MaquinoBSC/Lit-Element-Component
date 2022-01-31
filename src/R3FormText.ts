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

  render() {
    return html`
    `;
  }
}
