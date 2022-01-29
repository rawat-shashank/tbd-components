import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkButton } from '../../components/buttons/linkButton/LinkButton';

export default {
  title: 'Molecules/Buttons/Link Button',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Link Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Link Button',
  disabled: true,
};
