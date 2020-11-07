import React, { useCallback, useEffect } from 'react';

import { navigate, Redirect } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import CardList from 'components/CardList';
import { fetchAllNews, selectActiveCategory, selectActiveCategoryLoading, selectArticles } from 'slice/categoriesSlice';
import { selectCountry, setActiveNews } from 'slice/newsSlice';

import styles from './TopNewsCategoryPage.module.css';

const TopNewsCategoryPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);
  const articles = useSelector(selectArticles);
  const activeCategory = useSelector(selectActiveCategory);
  const loading = useSelector(selectActiveCategoryLoading);

  const onCardClick = useCallback(
    (cardData) => {
      dispatch(setActiveNews(cardData));
      navigate('/article');
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchAllNews({ country: country.code, category: activeCategory }));
  }, [dispatch, activeCategory, country]);

  if (!activeCategory) {
    return <Redirect to="/categories" noThrow />;
  }

  return (
    <div className={styles.pageWrapper}>
      <h2 className={styles['content-title']}>{t('top.news.title', { country: t(country.text) })}</h2>
      <CardList loading={loading} data={articles} onCardClick={onCardClick} />
    </div>
  );
};

export default TopNewsCategoryPage;
