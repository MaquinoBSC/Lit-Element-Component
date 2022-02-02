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
      expect(el.ambient).to.equal('light');
      assert.typeOf(el.ambient, 'String');
      
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

    describe('View Component in DOM', ()=> {
      it('Label is not displayed', ()=> {//cuando label no sea visible, asegurar que no exita en el DOM
        const text= el.shadowRoot?.querySelector('#label')?.textContent;
        expect(text).to.equal(undefined);
      });

      it('Description is not displayed', ()=> {//cuando description no sea visible, asegurar que no existe en el DOM
        const description= el.shadowRoot?.querySelector('#description')?.textContent;
        expect(description).to.equal(undefined);
      });

      it('View input', ()=> {//Verificar que nuestri input existe
        const input= el.shadowRoot?.querySelector('#input');
        expect(input?.getAttribute('id')).to.equal('input');
      })
    });
  });

  describe('Change props', ()=> {
    cleanComponent();

    it('View label in DOM', async ()=> {
      el.label= 'CUSTOM TEXT';
      el.withLabel= true;
      await el.updateComplete;
      const text= el.shadowRoot?.querySelector('#label')?.textContent;
      expect(text).to.equal(' CUSTOM TEXT ');
    });

    it('View description in DOM', async ()=> {
      el.description= "CUSTOM TEXT";
      el.withDescription= true;
      el.descriptionType= 'warning';
      await el.updateComplete;
      const text= el.shadowRoot?.querySelector('#description')?.textContent;
      const descriptionType= el.shadowRoot?.querySelector('#description')?.getAttribute('class');
      expect(descriptionType).to.equal('warning')
      expect(text).to.equal(" CUSTOM TEXT ");
    });

    it('View input', async ()=> {
      el.placeholder= "CUSTOM TEXT";
      await el.updateComplete;
      const input= el.shadowRoot?.querySelector('#input');
      expect(input?.getAttribute('placeholder')).to.equal('CUSTOM TEXT');
    });
  });
});
