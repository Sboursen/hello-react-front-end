import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: '',
  codeSnippet: '',
};

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
});

// Action creators are generated for each case reducer function
export const { getRandomGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;
