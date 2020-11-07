import React, { useEffect } from 'react';

import { message } from 'antd';

import APIInterceptor from 'components/APIInterceptor';
import Main from 'pages/main/Main';

import 'antd/dist/antd.css';

const App = () => {
  useEffect(() => {
    message.config({
      top: 100,
      duration: 2,
      maxCount: 10,
    });
  }, []);

  return (
    <>
      <APIInterceptor />
      <Main />
    </>
  );
};

export default App;
