import React from 'react';

import { Link, Location } from '@reach/router';
import { Drawer, Menu } from 'antd';
import { useTranslation } from 'react-i18next';

const MenuItems = ({ mode }) => {
  const [t] = useTranslation();

  return (
    <Location>
      {({ location }) => (
        <Menu mode={mode} selectedKeys={[location.pathname]}>
          <Menu.Item key="/">
            <Link to="/">{t('links.topnews')}</Link>
          </Menu.Item>
          <Menu.Item key="/categories">
            <Link to="/categories">{t('links.categories')}</Link>
          </Menu.Item>
          <Menu.Item key="/search">
            <Link to="/search">{t('links.search')}</Link>
          </Menu.Item>
        </Menu>
      )}
    </Location>
  );
};

const DefaultMenu = ({ smallMenu, smallMenuVisible, setSmallMenuVisible }) => (
  <>
    <Drawer
      title="Menu"
      placement="left"
      maskClosable
      visible={smallMenuVisible}
      getContainer={document.body}
      onClose={() => setSmallMenuVisible(false)}
      bodyStyle={{ padding: 0 }}
    >
      <MenuItems mode="inline" />
    </Drawer>
    {smallMenu || <MenuItems mode="horizontal" />}
  </>
);

export default DefaultMenu;
