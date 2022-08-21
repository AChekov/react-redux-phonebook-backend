import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (_, action) => action.payload,
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterContacts } = filterSlice.actions;

//  Selectors

export const getFilter = state => state.filter;
