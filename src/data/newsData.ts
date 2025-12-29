import { allNews } from './allNewsData';
import type { NewsArticle } from './allNewsData';

export const news: NewsArticle[] = allNews.slice(0, 4);

export type { NewsArticle };