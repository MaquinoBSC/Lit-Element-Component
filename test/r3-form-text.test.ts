import { html } from 'lit';
import { fixture, expect, assert } from '@open-wc/testing';
import { R3FormText } from '../src/R3FormText.js';
import '../src/r3-form-text.js';

let el: R3FormText;
const cleanComponent= async () => {
  el= await fixture<R3FormText>(html`<r3-form-text></r3-form-text>`);
  await el.updateComplete;
}

describe('R3FormText', ()=> {
  describe('Default value', ()=> {
    cleanComponent();//cargar en limpio nuestro componente
    it('Props value', ()=> {
      expect(el.label).to.equal('Default Text'); // expect metodo de testing de wc, label es una propieda y  valor por default es Deafult Text
      assert.typeOf(el.label, 'String');//assert es otro metodo de testing, que tipo de dato queremos que nuestra propiedad tenga

      expect(el.description).to.equal('Default Text');
      assert.typeOf(el.description, 'String');

      expect(el.descriptionType).to.equal('info');
      assert.typeOf(el.descriptionType, 'String');

      expect(el.placeholder).to.equal('Default Text');
      assert.typeOf(el.placeholder, 'String');
      
      expect(el.withDescription).to.equal(false);
      assert.typeOf(el.withDescription, 'Boolean');

      expect(el.withLabel).to.equal(false);
      assert.typeOf(el.withLabel, 'Boolean');
    });
  });
});
