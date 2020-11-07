import React from 'react';

import CardList from '../components/CardList';
import 'antd/dist/antd.css';

const story = {
  title: 'Example/CardList',
  component: CardList,
};
export default story;

const Template = (args) => <CardList {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  data: [
    {
      content: 'Content',
      description: 'Description',
      title: 'Title',
      urlToImage:
        'https://i2-prod.walesonline.co.uk/incoming/article19223174.ece/ALTERNATES/s1200/0_rbp__mai271020autumn7716JPG.jpg',
    },
  ],
  listClassName: '',
  cardClassName: '',
  onCardClick: undefined,
};

export const Empty = Template.bind({});
Empty.args = {
  loading: false,
  data: [],
  listClassName: '',
  cardClassName: '',
  onCardClick: undefined,
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  loading: false,
  data: [
    {
      content: 'Content',
      description: 'Description',
      title: 'Title',
      urlToImage:
        'https://i2-prod.walesonline.co.uk/incoming/article19223174.ece/ALTERNATES/s1200/0_rbp__mai271020autumn7716JPG.jpg',
    },
    {
      content: 'Content',
      description: 'Description',
      title: 'Title',
      urlToImage:
        'https://i2-prod.walesonline.co.uk/incoming/article19223174.ece/ALTERNATES/s1200/0_rbp__mai271020autumn7716JPG.jpg',
    },
    {
      content: 'Content',
      description: 'Description',
      title: 'Title',
      urlToImage:
        'https://i2-prod.walesonline.co.uk/incoming/article19223174.ece/ALTERNATES/s1200/0_rbp__mai271020autumn7716JPG.jpg',
    },
    {
      content: 'Content',
      description: 'Description',
      title: 'Title',
      urlToImage:
        'https://i2-prod.walesonline.co.uk/incoming/article19223174.ece/ALTERNATES/s1200/0_rbp__mai271020autumn7716JPG.jpg',
    },
    {
      content: 'Content',
      description: 'Description',
      title: 'Title',
      urlToImage:
        'https://i2-prod.walesonline.co.uk/incoming/article19223174.ece/ALTERNATES/s1200/0_rbp__mai271020autumn7716JPG.jpg',
    },
    {
      content: 'Content',
      description: 'Description',
      title: 'Title',
      urlToImage:
        'https://i2-prod.walesonline.co.uk/incoming/article19223174.ece/ALTERNATES/s1200/0_rbp__mai271020autumn7716JPG.jpg',
    },
    {
      content: 'Content',
      description: 'Description',
      title: 'Title',
      urlToImage:
        'https://i2-prod.walesonline.co.uk/incoming/article19223174.ece/ALTERNATES/s1200/0_rbp__mai271020autumn7716JPG.jpg',
    },
    {
      content: 'Content',
      description: 'Description',
      title: 'Title',
      urlToImage:
        'https://i2-prod.walesonline.co.uk/incoming/article19223174.ece/ALTERNATES/s1200/0_rbp__mai271020autumn7716JPG.jpg',
    },
  ],
  listClassName: '',
  cardClassName: '',
  onCardClick: undefined,
};
