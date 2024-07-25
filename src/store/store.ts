import { configureStore } from '@reduxjs/toolkit'

import bannerReducer from './slices/banner-slice'
import genreReducer from './slices/genre-slice'
import readerReducer from './slices/reader-slice'

const store = configureStore({
    reducer: {
        banner: bannerReducer,
        genre: genreReducer,
        reader: readerReducer,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
