/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import MarvelApi, { Character } from 'app/api';

export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface CharacterState {
  list: Character[],
  status: StatusType,
  errorMessage?: string;
}

export const fetchCharacters = createAsyncThunk('character/fetchCharacters', async () => {
  const result = await MarvelApi
    .getInstance()
    .fetchCharacters();

  return result;
})

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: <CharacterState>{
    status: 'idle',
    error: false,
    list: []
  },
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.list = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed'
        state.errorMessage = action.error.message;
        state.list = [
          <Character>{
            name: 'Error',
            description: action.error.message,
            thumbnail: { path: 'https://dummyimage.com/350x150/e0b3e0/fff' }
          },
        ];
      })
  }
})

// Action creators are generated for each case reducer function
// export const { action } = charactersSlice.actions;

export const selectAllCharacters = (state: { characters: CharacterState }) => state.characters.list;

export default charactersSlice.reducer;
