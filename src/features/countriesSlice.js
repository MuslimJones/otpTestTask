import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch countries
export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries', // Action type prefix
  async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  }
);

// Slice for countries
const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    loading: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;