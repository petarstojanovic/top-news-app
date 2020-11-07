import React from 'react';

import Button from '../components/Button';

const story = {
  title: 'Example/Button',
  component: Button,
};
export default story;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};
