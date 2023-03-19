import NewsItemFull from './components/NewsItemFull';
import NewsList from './components/NewsList';
import useNews from './hooks/useNews';
import NewsService from './service';
import newsReducer, { actions } from './state';

export * from './types';

export { NewsService, newsReducer, actions, useNews, NewsList, NewsItemFull };
