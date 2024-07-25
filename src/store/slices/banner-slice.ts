import { createSlice } from '@reduxjs/toolkit'

import bannerContentJSON from '../../data/banner-content.json'

export type BannerState = {
    content: []
}

const initialState: BannerState = {
    content: [],
}

export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        getContent: (state) => {
            state.content = bannerContentJSON.data
        },
    },
})

export const { getContent } = bannerSlice.actions

export default bannerSlice.reducer

