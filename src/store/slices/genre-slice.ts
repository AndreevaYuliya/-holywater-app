import { createSlice } from '@reduxjs/toolkit'

import genreContentJSON from '../../data/genre-content.json'

export type genreState = {
    content: []
}

const initialState: genreState = {
    content: [],
}

export const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {
        getContent: (state) => {
            state.content = genreContentJSON.data
        },
    },
})

export const { getContent } = genreSlice.actions

export default genreSlice.reducer

