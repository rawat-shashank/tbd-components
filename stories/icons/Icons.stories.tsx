import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../../components/icons/Icon';

export default {
  title: 'Icons/Icon',
  component: Icon,
  args: {
    width: '1rem',
    height: '1rem',
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const ArrowUp = Template.bind({});
ArrowUp.args = {
  name: 'arrow-up',
};

export const ArrowDown = Template.bind({});
ArrowDown.args = {
  name: 'arrow-down',
};
export const ArrowBackward = Template.bind({});
ArrowBackward.args = {
  name: 'arrow-backward',
};
export const ArrowForward = Template.bind({});
ArrowForward.args = {
  name: 'arrow-forward',
};
export const Figma = Template.bind({});
Figma.args = {
  name: 'figma',
};
export const Globe = Template.bind({});
Globe.args = {
  name: 'globe',
};
export const ImagePlaceholder = Template.bind({});
ImagePlaceholder.args = {
  name: 'image-placeholder',
};
export const Mail = Template.bind({});
Mail.args = {
  name: 'mail',
};
export const Menu = Template.bind({});
Menu.args = {
  name: 'menu',
};
export const Sun = Template.bind({});
Sun.args = {
  name: 'sun',
};
export const Moon = Template.bind({});
Moon.args = {
  name: 'moon',
};
export const System = Template.bind({});
System.args = {
  name: 'system',
};
