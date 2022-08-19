import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fde6f641165d66bfb3e2d1.mockapi.io',
  }),
  endpoints: builder => ({
    getContact: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
  }),
});

export const { useGetContactQuery } = contactsApi;
