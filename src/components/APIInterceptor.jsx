import { useEffect } from 'react';

import { message } from 'antd';

import API from 'app/api';

export default function APIInterceptor() {
  const showResponseMessage = (response) => {
    let messageContent = '';
    const responseData = (response && response.data) || {};
    if (responseData.message) {
      messageContent = responseData.message;
    }

    if (messageContent === '') {
      return;
    }

    if (response.status >= 200 && response.status < 300) {
      return;
    }

    message.error(messageContent);
  };

  const requestInterceptorSuccess = (config) => config;

  const requestInterceptorFailed = (error) => Promise.reject(error);

  const responseInterceptorSuccess = (response) => {
    showResponseMessage(response);
    return response;
  };

  const responseInterceptorFailed = (error) => {
    // Display error message
    const response = (error && error.response) || {};
    showResponseMessage(response);

    return Promise.reject(error);
  };

  const setupInterceptors = (api) => {
    api.interceptors.request.use(requestInterceptorSuccess, requestInterceptorFailed);
    api.interceptors.response.use(responseInterceptorSuccess, responseInterceptorFailed);
  };

  useEffect(() => {
    setupInterceptors(API);
  }, []);

  return null;
}
