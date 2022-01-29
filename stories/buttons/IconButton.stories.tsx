import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from '../../components/buttons/iconButton/IconButton';

export default {
  title: 'Molecules/Buttons/Icon Button',
  component: IconButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: 'sun',
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: 'sun',
  variant: 'default',
  disabled: true,
};

export const Primary = Template.bind({});
Primary.args = {
  icon: 'sun',
  variant: 'primary',
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
