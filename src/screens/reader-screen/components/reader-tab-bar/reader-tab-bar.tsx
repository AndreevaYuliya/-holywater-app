import React from 'react'

import { View } from 'react-native'

import { useDispatch } from 'react-redux'

import { prevChapter, nextChapter } from '../../../../store/slices/reader-slice'

import MenuButton from '../../../../components/menu-button'
import SettingsButton from '../../../../components/settings-button'
import NavArrowButton from '../../../../components/nav-arrow-button'

import styles from './styles'

type Props = {
    isPrevButtonDisabled: boolean
    isNextButtonDisabled: boolean
}

const ReaderTabBar = (props: Props) => {
    const { isPrevButtonDisabled, isNextButtonDisabled } = props

    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <MenuButton onPress={() => null} />
            <SettingsButton onPress={() => null} />

            <NavArrowButton
                navigate='prev'
                disabled={isPrevButtonDisabled}
                onPress={() => dispatch(prevChapter())}
            />

            <NavArrowButton
                navigate='next'
                disabled={isNextButtonDisabled}
                onPress={() => dispatch(nextChapter())}
            />
        </View>
    )
}

export default ReaderTabBar
