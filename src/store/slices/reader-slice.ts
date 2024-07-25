import { createSlice } from '@reduxjs/toolkit'

import readerContent from '../../data/reader-content'

export type readerState = {
    book: unknown
    chapters: []
    current_chapter: number
    is_last_chapter: boolean
}

const initialState: readerState = {
    book: {},
    chapters: [],
    current_chapter: 1,
    is_last_chapter: false,
}

export const readerSlice = createSlice({
    name: 'reader',
    initialState,
    reducers: {
        getContent: (state, actions) => {
            if (actions.payload.title !== state.book.title) {
                state.book = { ...actions.payload }
                state.chapters = readerContent.data
                state.current_chapter = 1
                state.is_last_chapter = false
            }
        },
        prevChapter: (state) => {
            if (state.current_chapter > 1) {
                const prev_chapter = state.current_chapter - 1

                state.current_chapter = prev_chapter
                state.is_last_chapter = false
            }
        },
        nextChapter: (state) => {
            if (state.current_chapter < state.chapters.length) {
                const next_chapter = state.current_chapter + 1

                state.current_chapter = next_chapter

                if (next_chapter === state.chapters.length) {
                    state.is_last_chapter = true
                }
            }
        },
    },
})

export const {
    getContent,
    prevChapter,
    nextChapter,
} = readerSlice.actions

export default readerSlice.reducer

