import React, { useState } from 'react';

import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import styles from './Carousel.module.css';

const Carousel = ({ children, className = '' }) => {
  const carouselWidth = (children.length || 1) * 420;
  const [position, setPosition] = useState(0);

  const onLeftArrowClick = () => {
    setPosition((prev) => (prev < 0 ? prev + 200 : 0));
  };

  const onRightArrowClick = () => {
    setPosition((prev) => (prev >= -(carouselWidth - 420) ? prev - 200 : prev));
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`${styles.arrow} ${styles.leftArrow}`} onClick={onLeftArrowClick}>
        <ArrowLeftOutlined className={styles.icon} />
      </div>
      <div className={styles.children} style={{ width: `${carouselWidth}px`, transform: `translateX(${position}px)` }}>
        {children}
      </div>
      <div className={`${styles.arrow} ${styles.rightArrow}`} onClick={onRightArrowClick}>
        <ArrowRightOutlined className={styles.icon} />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Carousel.defaultProps = {
  children: null,
  className: '',
};

export default Carousel;
