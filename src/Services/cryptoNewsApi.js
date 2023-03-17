import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '1b1a17b1e6msh41c838c7352595ep1632f5jsn57c3d4f424d4',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  };
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      // query: () => createRequest('/news'),
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),


    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
// Bing News Search API Documentation