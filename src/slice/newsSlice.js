/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getTopNews } from 'app/api/news';

const initialState = {
  country: {
    code: 'gb',
    text: 'Great Britain',
  },
  loading: false,
  news: [],
  activeNews: null,
};

export const fetchAllNews = createAsyncThunk('/news/fetchAllNews', getTopNews);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setCountry: (state, { payload }) => {
      state.country = payload;
    },
    setActiveNews: (state, { payload }) => {
      state.activeNews = payload;
    },
  },
  extraReducers: {
    [fetchAllNews.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllNews.rejected]: (state) => {
      state.loading = false;
    },
    [fetchAllNews.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.news = payload.articles;
      state.total = payload.totalResults;
    },
  },
});

export const selectCountry = (store) => store.news.country;
export const selectNews = (store) => store.news.news;
export const selectLoading = (store) => store.news.loading;
export const selectActiveNews = (store) => store.news.activeNews;

export const { setCountry, setActiveNews } = newsSlice.actions;

export default newsSlice.reducer;
