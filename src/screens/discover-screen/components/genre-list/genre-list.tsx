import React, { useEffect } from 'react'

import { View } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../../../store/store'
import { getContent } from '../../../../store/slices/genre-slice'

import { GenreSectionList } from './components'

const GenreList = () => {
    const genreContent = useSelector((state: RootState) => state.genre.content)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContent())
    }, [])

    return (
        <View>
            {genreContent.map((item) => <GenreSectionList key={item.id} item={item} />)}
        </View>
    )
}

export default GenreList
