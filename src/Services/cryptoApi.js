import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '',
  'X-RapidAPI-Host': ''
}
const createRequest =(url)=>({url,headers:cryptoApiHeaders})
const baseUrl = 'https://coinranking1.p.rapidapi.com';
export const cryptoApi = createApi({
     reducerPath:'cryptoApi',
     baseQuery: fetchBaseQuery({baseUrl:baseUrl}),
     endpoints: (builder)=>({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
        // query: () => createRequest('/coins')
      }),
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
    
  
     }),

});
export const {useGetCryptosQuery,useGetCryptoDetailsQuery} = cryptoApi;


