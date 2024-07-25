import React, { useEffect, useRef } from 'react'

import {
    SafeAreaView,
    View,
    ScrollView,
    Text,
} from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../store/store'
import { getContent } from '../../store/slices/reader-slice'

import CloseButton from '../../components/close-button'

import {
    NextChapterButton,
    ReaderTabBar,
} from './components'

import styles from './styles'

const ReaderScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const { t } = useTranslation()

    const reader = useSelector((state: RootState) => state.reader)

    const dispatch = useDispatch()

    const scrollViewRef = useRef({})

    useEffect(() => {
        dispatch(getContent(route?.params?.book))
    }, [])

    useEffect(() => {
        scrollViewRef?.current?.scrollTo?.({ y: 0, animated: true })
    }, [reader.current_chapter])

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.header}>
                <CloseButton containerStyle={styles.close_button} onPress={() => navigation.goBack()} />

                <Text style={styles.title}>{t('screens.reader_screen.title', { count: reader.current_chapter })}</Text>
            </View>

            <ScrollView
                ref={scrollViewRef}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content_container}
            >
                {
                    !!reader.chapters.length && (
                        <>
                            <Text>{reader.chapters[reader.current_chapter - 1].text}</Text>
                            
                            <NextChapterButton isNextButtonDisabled={reader.is_last_chapter} />
                        </>
                    )
                }
            </ScrollView>

            <ReaderTabBar
                isPrevButtonDisabled={reader.current_chapter === 1}
                isNextButtonDisabled={reader.is_last_chapter}
            />
        </SafeAreaView>
    )
}

export default ReaderScreen
