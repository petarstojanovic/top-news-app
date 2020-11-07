import { configureStore } from '@reduxjs/toolkit';

import categories from '../slice/categoriesSlice';
import news from '../slice/newsSlice';

const store = configureStore({
  reducer: { news, categories },
});

export default store;
