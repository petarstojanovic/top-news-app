import React from 'react';

import { Redirect } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { NO_IMAGE_PLACEHOLDER } from 'app/constants';
import Button from 'components/Button';
import { selectActiveNews, setActiveNews } from 'slice/newsSlice';

import styles from './ArticleDetailsPage.module.css';

const ArticleDetailsPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const article = useSelector(selectActiveNews);

  // return back if there is no article selected
  if (!article) {
    return <Redirect to="/" noThrow />;
  }

  const backHandler = () => {
    dispatch(setActiveNews(null));
    window.history.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img alt="No data" src={article.urlToImage || NO_IMAGE_PLACEHOLDER} />
        <div />
      </div>
      <div className={styles.title}>{article.title}</div>
      <div className={styles.content}>{article.content}</div>
      <div className={styles.backLink}>
        <Button onClick={backHandler} label={`< ${t('Back to list')}`} />
      </div>
    </div>
  );
};

export default ArticleDetailsPage;
