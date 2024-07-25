import React from 'react'

import {
    Pressable,
    Text,
} from 'react-native'

import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { nextChapter } from '../../../../store/slices/reader-slice'

import styles from './styles'

type Props = { isNextButtonDisabled: boolean }

const NextChapterButton = (props: Props) => {
    const { isNextButtonDisabled } = props

    const { t } = useTranslation()
    const dispatch = useDispatch()

    return (
        <Pressable
            disabled={isNextButtonDisabled}
            style={({ pressed }) => [
                styles.container,
                { opacity: isNextButtonDisabled ? 0.2 : pressed ? 0.2 : 1 },
            ]}
            onPress={() => dispatch(nextChapter())}
        >
            <Text style={styles.title}>{t('button.next_chapter')}</Text>
        </Pressable>
    )
}

export default NextChapterButton
