import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LabelButton } from '../../components/buttons/labelButton/LabelButton';

export default {
  title: 'Molecules/Buttons/Label Button',
  component: LabelButton,
} as ComponentMeta<typeof LabelButton>;

const Template: ComponentStory<typeof LabelButton> = (args) => (
  <LabelButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  icon: 'sun',
  variant: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  icon: 'sun',
  variant: 'default',
  disabled: true,
};

export const Outline = Template.bind({});
Outline.args = {
  icon: 'sun',
  variant: 'outline',
};

export const Active = Template.bind({});
Active.args = {
  icon: 'sun',
  variant: 'active',
};
