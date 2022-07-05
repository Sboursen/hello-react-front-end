import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  language: '',
  codeSnippet: '',
};

export const getGreeting = createAsyncThunk(
  'greeting/getGreeting',
  async () => {
    const res = await fetch('http://127.0.0.1:3000/api/random_greeting');
    const data = await res.json();
    return data;
  },
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    getRandomGreeting: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.language = action.payload.language;
      // eslint-disable-next-line no-param-reassign
      state.codeSnippet = action.payload.codeSnippet;
    },
  },
  extraReducers: {
    [getGreeting.fulfilled]: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.language = payload.language;
      // eslint-disable-next-line no-param-reassign
      state.codeSnippet = payload.code_snippet;
    },
  },
});

export const { getRandomGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;
