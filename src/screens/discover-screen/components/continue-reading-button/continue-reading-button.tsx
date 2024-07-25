import React from 'react'

import {
    Pressable,
    View,
    Image,
    Text,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { RootState } from '../../../../store/store'

import Icon from '../../../../components/Icon'

import styles from './styles'

const ContinueReadingButton = () => {
    const navigation = useNavigation()
    const { t } = useTranslation()
    
    const readerBook = useSelector((state: RootState) => state.reader.book)

    if (!readerBook.title) {
        return null
    }

    return (
        <Pressable
            style={({ pressed }) => [styles.container, { opacity: pressed ? 0.2 : 1 }]}
            onPress={() => navigation.navigate('Reader', { book: readerBook })}
        >
            <Image
                source={{ uri: readerBook.img }}
                style={styles.image}
            />

            <View style={styles.text_container}>
                <Text style={styles.text}>{t('button.continue_reading')}</Text>
                <Text style={styles.title}>{readerBook.title}</Text>
            </View>

            <Icon name='arrow-right' />
        </Pressable>
    )
}

export default ContinueReadingButton
