import React from 'react'

import {
    SafeAreaView,
    View,
    Text,
    ScrollView,
} from 'react-native'

import { useTranslation } from 'react-i18next'

import SearchButton from '../../components/search-button'

import {
    BannerList,
    GenreList,
    ContinueReadingButton,
} from './components'

import styles from './styles'

const DiscoverScreen = () => {
    const { t } = useTranslation()

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.header}>
                <SearchButton containerStyle={styles.search_button} onPress={() => null} />

                <View style={styles.title_container}>
                    <Text style={styles.title}>{t('screens.discover_screen.title')}</Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content_container}>
                <BannerList />
                <GenreList />
            </ScrollView>

            <ContinueReadingButton />
        </SafeAreaView>
    )
}

export default DiscoverScreen
