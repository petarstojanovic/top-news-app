import React from 'react';

import { Card, List, Spin } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { NO_IMAGE_PLACEHOLDER } from 'app/constants';

import styles from './CardList.module.css';

const CardList = ({ loading, data, listClassName = '', cardClassName = '', onCardClick }) => {
  const [t] = useTranslation();

  return (
    <Spin spinning={loading}>
      <List
        className={`${styles['articles-list']} ${listClassName}`}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 6,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              className={cardClassName}
              hoverable
              cover={<img alt="No data" src={item.urlToImage || NO_IMAGE_PLACEHOLDER} />}
              onClick={() => onCardClick && onCardClick(item)}
            >
              <Card.Meta title={item.title} description={item.description} />
              <div className={styles['card-link']}>{`${t('More')}>>>`}</div>
            </Card>
          </List.Item>
        )}
      />
    </Spin>
  );
};

CardList.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.shape([
    { title: PropTypes.string, urlToImage: PropTypes.string, description: PropTypes.string, content: PropTypes.string },
  ]),
  listClassName: PropTypes.string,
  cardClassName: PropTypes.string,
  onCardClick: PropTypes.func,
};

CardList.defaultProps = {
  loading: false,
  data: [],
  listClassName: '',
  cardClassName: '',
  onCardClick: undefined,
};
export default CardList;
