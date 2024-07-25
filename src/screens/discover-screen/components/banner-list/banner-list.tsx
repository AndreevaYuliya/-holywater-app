import React, { useEffect } from 'react'

import { FlatList } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../../../store/store'
import { getContent } from '../../../../store/slices/banner-slice'

import { BannerListItem } from './components'

import styles from './styles'

const BannerList = () => {
    const bannerContent = useSelector((state: RootState) => state.banner.content)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContent())
    }, [])

    return (
        <FlatList
            data={bannerContent}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <BannerListItem item={item} />}
            contentContainerStyle={styles.content_container}
        />
    )
}

export default BannerList
