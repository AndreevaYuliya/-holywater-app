import React from 'react'

import {
    Pressable,
    Image,
    Text,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { useTranslation } from 'react-i18next'

import styles from './styles'

type Props = {

}

const BannerListItem = (props: Props) => {
    const { item } = props

    const navigation = useNavigation()
    const { t } = useTranslation()

    return (
        <Pressable
            style={({ pressed }) => [styles.container, { opacity: pressed ? 0.2 : 1 }]}
            onPress={() => navigation.navigate('Reader', { book: item })}
        >
            <Text style={styles.label}>{item.isFree === 1 ? t('common.free') : ''}</Text>
            <Text style={styles.title}>{item.title}</Text>

            <Image source={{ uri: item.img }} style={styles.image} />
        </Pressable>
    )
}

export default BannerListItem
