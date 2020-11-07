import React, { useEffect, useMemo, useState } from 'react';

import { MenuOutlined } from '@ant-design/icons';
import { Router } from '@reach/router';
import { Dropdown, Layout, Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesPage from 'pages/categories/CategoriesPage';
import TopNewsCategoryPage from 'pages/categories/TopNewsCategoryPage';
import NotFoundPage from 'pages/notFoundPage/NotFoundPage';
import SearchPage from 'pages/search/SearchPage';
import ArticleDetailsPage from 'pages/topNews/ArticleDetailsPage';
import TopNewsPage from 'pages/topNews/TopNewsPage';
import { selectActiveNews, selectCountry, setCountry } from 'slice/newsSlice';

import DefaultMenu from './DefaultMenu';
import styles from './Main.module.css';

const Main = () => {
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);
  const article = useSelector(selectActiveNews);

  const [smallMenu, setSmallMenu] = useState(false);
  const [smallMenuVisible, setSmallMenuVisible] = useState(false);

  const countryMenu = (
    <Menu
      onClick={({
        key: code,
        item: {
          props: { text },
        },
      }) => {
        dispatch(setCountry({ code, text }));
      }}
    >
      <Menu.Item key="gb" text="Great Britain">
        Great Britain
      </Menu.Item>
      <Menu.Item key="us" text="United States of America">
        United States of America
      </Menu.Item>
    </Menu>
  );

  // eslint-disable-next-line no-undef
  const resizeObserver = useMemo(
    () =>
      new ResizeObserver(
        ([
          {
            contentRect: { width },
          },
        ]) => {
          setSmallMenu(width <= 720);
          setSmallMenuVisible(false);
        }
      ),
    []
  );

  useEffect(() => {
    resizeObserver.observe(document.body);
    return () => resizeObserver.unobserve(document.body);
  }, [resizeObserver]);

  return (
    <Layout className={styles.layout}>
      <Layout.Header className={styles.header}>
        {smallMenu && <MenuOutlined onClick={() => setSmallMenuVisible(true)} />}
        <DefaultMenu
          smallMenu={smallMenu}
          smallMenuVisible={smallMenuVisible}
          setSmallMenuVisible={setSmallMenuVisible}
        />
        <Dropdown disabled={article} placement="bottomRight" trigger="click" overlay={countryMenu}>
          <Avatar className={styles.avatar}>{country.code}</Avatar>
        </Dropdown>
      </Layout.Header>
      <Layout.Content>
        <Router className={styles.content}>
          <TopNewsPage path="/" />
          <ArticleDetailsPage path="/article" />
          <CategoriesPage path="/categories" />
          <TopNewsCategoryPage path="/categories-top" />
          <SearchPage path="/search" />
          <NotFoundPage default />
        </Router>
      </Layout.Content>
    </Layout>
  );
};

export default Main;
