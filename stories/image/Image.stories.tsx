import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from '../../components/image/Image';

export default {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '',
  alt: '',
  style: {
    height: '2rem',
    width: '2rem',
  },
};

export const ImageWithSrc = Template.bind({});
ImageWithSrc.args = {
  src: 'https://rawat-shashank.github.io/the-boring-guy/static/images/dp.png',
  alt: 'dp-image',
  style: {
    height: '5rem',
    width: '5rem',
  },
};
