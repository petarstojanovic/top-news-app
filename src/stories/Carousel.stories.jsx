import React from 'react';

import Carousel from '../components/Carousel';
import 'antd/dist/antd.css';

const story = {
  title: 'Example/Carousel',
  component: Carousel,
};
export default story;

const Template = (args) => <Carousel {...args} />;

const childStyle = {
  width: '400px',
  height: '200px',
  marginRight: '20px',
  background: 'blueviolet',
};
const Child = () => <div style={childStyle} />;

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  children: [<Child />, <Child />, <Child />, <Child />, <Child />, <Child />, <Child />, <Child />],
};
