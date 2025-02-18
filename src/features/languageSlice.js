import { createSlice } from '@reduxjs/toolkit'

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'ru',
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})
export const { setLanguage } = languageSlice.actions
export const selectLanguage = state => state.language
export default languageSlice.reducer
