import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '1b1a17b1e6msh41c838c7352595ep1632f5jsn57c3d4f424d4',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
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


// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '1b1a17b1e6msh41c838c7352595ep1632f5jsn57c3d4f424d4',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

// request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });