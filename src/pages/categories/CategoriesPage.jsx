import React, { useEffect, useState } from 'react';

import { navigate } from '@reach/router';
import { Card, Collapse, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { CATEGORIES, NO_IMAGE_PLACEHOLDER } from 'app/constants';
import Carousel from 'components/Carousel';
import {
  fetchAllNews,
  fetchTopNews,
  resetLoaded,
  selectCategories,
  setActiveCategory,
  setLoading,
} from 'slice/categoriesSlice';
import { selectCountry, setActiveNews } from 'slice/newsSlice';

import styles from './CategoriesPage.module.css';

const { Panel } = Collapse;

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation();

  const country = useSelector(selectCountry);
  const categories = useSelector(selectCategories);

  const [activeCat, setActiveCat] = useState('');

  // when clicked on category collapse fetch articles
  const onCollapseChange = (category) => {
    setActiveCat(category);
    if (category && !categories[category].loaded) {
      dispatch(setLoading({ loading: true, category }));
      dispatch(
        fetchTopNews({
          category,
          country: country.code,
          pageSize: 5,
        })
      );
    }
  };

  // when country changes reset loaded state of all categories
  // if one is currently open reload immediately
  useEffect(() => {
    dispatch(resetLoaded());
    if (activeCat) {
      dispatch(setLoading({ loading: true, category: activeCat }));
      dispatch(
        fetchTopNews({
          category: activeCat,
          country: country.code,
          pageSize: 5,
        })
      );
    }
  }, [dispatch, country]);

  // open article page
  const onCardClick = (cardData) => {
    dispatch(setActiveNews(cardData));
    navigate('/article');
  };

  // when clicked on category navigate to page with top articles for that category
  const onCategoryClick = (category) => (event) => {
    // prevent onClick event from accordion header
    event.stopPropagation();
    const params = {
      category,
      country: country.code,
    };
    dispatch(setActiveCategory(category));
    dispatch(fetchAllNews(params));
    navigate('/categories-top');
  };

  return (
    <div className={styles.pageWrapper}>
      <h2>{t('categories.title')}</h2>
      <Collapse accordion onChange={onCollapseChange}>
        {CATEGORIES.map((c) => {
          const { data, loading } = categories[c];

          return (
            <Panel
              // eslint-disable-next-line prettier/prettier
              header={<span className={styles.categoryHeader} onClick={onCategoryClick(c)}>{t(`categories.${c}`)}</span>}
              key={c}
            >
              <Spin spinning={loading}>
                <Carousel>
                  {data.map((article) => (
                    <div>
                      <Card
                        className={styles.card}
                        hoverable
                        cover={<img alt="No data" src={article.urlToImage || NO_IMAGE_PLACEHOLDER} />}
                        onClick={() => onCardClick(article)}
                      >
                        <Card.Meta title={article.title} description={article.description} />
                        <div className="">{`${t('More')}>>>`}</div>
                      </Card>
                    </div>
                  ))}
                </Carousel>
              </Spin>
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default CategoriesPage;
