import React, { useCallback, useEffect, useState } from 'react';

import { navigate } from '@reach/router';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import CardList from 'components/CardList';
import { useDebounce, useApi } from 'hooks/customHooks';
import { selectCountry, setActiveNews } from 'slice/newsSlice';

import styles from './SearchPage.module.css';

const SearchPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);

  const [search, setSearch] = useState('');
  const [, setSearchDebouce] = useDebounce();
  const [loading, setLoading] = useState(false);
  const [data, setParam] = useApi({
    country: country.code,
    q: search,
  });

  const onCardClick = useCallback(
    (cardData) => {
      dispatch(setActiveNews(cardData));
      navigate('/article');
    },
    [dispatch]
  );

  useEffect(() => {
    setParam({ country: country.code, q: search });
  }, [country]);

  const handleSearchChange = ({ target: { value } }) => {
    setSearch(value);
    setSearchDebouce(async () => {
      setLoading(true);
      await setParam({
        country: country.code,
        q: value,
      });
      setLoading(false);
    }, 500);
  };

  return (
    <div className={styles.pageWrapper}>
      <Input placeholder={t('Search')} value={search} onChange={handleSearchChange} />
      <h2 className={styles['content-title']}>{t('top.news.title', { country: t(country.text) })}</h2>
      <CardList loading={loading} data={data} onCardClick={onCardClick} />
    </div>
  );
};

export default SearchPage;
