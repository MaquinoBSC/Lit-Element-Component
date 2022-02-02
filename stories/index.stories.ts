import { html, TemplateResult } from 'lit';
import '../src/r3-form-text.js';

export default {
  title: 'R3FormText',
  component: 'r3-form-text',
  argTypes: {
    ambient: { control: 'ambient', description: 'Cambiar entre tema darl y light' },
    description: { control: 'description', description: 'Texto inferior del input' },
    descripcionType: { control: 'descriptionType', description: 'Cambiar el color de la description' },
    label: { control: 'label', description: 'Texto superior en el input' },
    placeholder: { control: 'placeholder', description: 'Texto dentro del input' },
    withDescription: { control: 'withDescription', description: 'Mostar u ocultar la descripcion' },
    withLabel: { control: 'withLabel', description: 'Mostrar u ocultar el texto superior'},
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  description: string,
  descriptionType: string,
  label: string,
  ambient: string,
  placeholder: string,
  withDescription: boolean,
  withLabel: boolean,
}

const Template: Story<ArgTypes> = ({
  description= 'Default Text',
  descriptionType= 'info',
  label= 'Default Text',
  ambient= 'light',
  placeholder= 'Placeholder',
  withDescription= false,
  withLabel= false,
}: ArgTypes) => html`
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=VT323&display=swap" rel="stylesheet">
  <r3-form-text
    description="${description}"
    description-type="${descriptionType}"
    label="${label}"
    ambient="${ambient}"
    placeholder="${placeholder}"
    ?with-description="${withDescription}"
    ?with-label="${withLabel}"
  >
  </r3-form-text>
`;

export const Default = Template.bind({});

export const withLabel= Template.bind({});
withLabel.args= {
  label: 'Custom Text',
  withLabel: true,
}

export const withDescription= Template.bind({});
withDescription.args= {
  withDescription: true,
  description: "Custom Description",
  descriptionType: 'alert',
}

export const darkTheme= Template.bind({});
darkTheme.args= {
  ambient: 'dark',
  withDescription: true,
  description: "Custom Description",
  descriptionType: 'alert',
  label: 'Custom Text',
  withLabel: true,
}
