import API from '.';

export const getTopNews = async (params) => {
  const response = await API.get('', {
    params,
  });
  return response.data || {};
};

export const getTopNewsByCategory = async (params) => {
  const response = await API.get('', {
    params,
  });
  return (response.data && { data: response.data, category: params.category }) || {};
};
