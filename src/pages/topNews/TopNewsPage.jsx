import React, { useCallback, useEffect } from 'react';

import { navigate } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import CardList from 'components/CardList';
import { fetchAllNews, selectCountry, selectLoading, selectNews, setActiveNews } from 'slice/newsSlice';

import styles from './TopNewsPage.module.css';

const TopNewsPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);
  const news = useSelector(selectNews);
  const loading = useSelector(selectLoading);

  const onCardClick = useCallback(
    (cardData) => {
      dispatch(setActiveNews(cardData));
      navigate('/article');
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchAllNews({ country: country.code }));
  }, [dispatch, country]);

  return (
    <div className={styles.pageWrapper}>
      <h2 className={styles['content-title']}>{t('top.news.title', { country: t(country.text) })}</h2>
      <CardList loading={loading} data={news} onCardClick={onCardClick} />
    </div>
  );
};

export default TopNewsPage;
