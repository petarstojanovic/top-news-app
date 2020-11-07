/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getTopNewsByCategory } from 'app/api/news';

const initialState = {
  categories: {
    business: { data: [], loading: false, loaded: false },
    entertainment: { data: [], loading: false, loaded: false },
    general: { data: [], loading: false, loaded: false },
    health: { data: [], loading: false, loaded: false },
    science: { data: [], loading: false, loaded: false },
    sports: { data: [], loading: false, loaded: false },
    technology: { data: [], loading: false, loaded: false },
  },
  activeCategory: null,
  activeCategoryLoading: false,
  articles: [],
};

export const fetchAllNews = createAsyncThunk('/categories/fetchAllNews', getTopNewsByCategory);
export const fetchTopNews = createAsyncThunk('/categories/fetchTopNews', getTopNewsByCategory);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setLoading: (state, { payload: { loading, category } }) => {
      state.categories[category].loading = loading;
    },
    resetLoaded: (state) => {
      Object.keys(state.categories).forEach((key) => {
        state.categories[key].loaded = false;
      });
    },
    setActiveCategory: (state, { payload }) => {
      state.activeCategory = payload;
    },
  },
  extraReducers: {
    [fetchTopNews.pending]: (state) => {},
    [fetchTopNews.rejected]: (state) => {},
    [fetchTopNews.fulfilled]: (state, { payload: { data, category } }) => {
      state.categories[category].loading = false;
      state.categories[category].loaded = true;
      state.categories[category].data = data.articles;
    },
    [fetchAllNews.pending]: (state) => {
      state.activeCategoryLoading = true;
    },
    [fetchAllNews.rejected]: (state) => {
      state.activeCategoryLoading = false;
    },
    [fetchAllNews.fulfilled]: (state, { payload: { data } }) => {
      state.activeCategoryLoading = false;
      state.articles = data.articles;
    },
  },
});

export const selectLoading = (store) => store.categories.loading;
export const selectCategories = (store) => store.categories.categories;
export const selectActiveCategory = (store) => store.categories.activeCategory;
export const selectActiveCategoryLoading = (store) => store.categories.activeCategoryLoading;
export const selectArticles = (store) => store.categories.articles;

export const { setLoading, resetLoaded, setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
