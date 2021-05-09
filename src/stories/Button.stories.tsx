import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from 'antd';
import React from 'react';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => <Button {...args}>test</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
