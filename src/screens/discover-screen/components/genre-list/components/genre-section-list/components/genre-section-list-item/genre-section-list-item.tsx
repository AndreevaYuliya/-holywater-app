import React from 'react'

import {
    Pressable,
    View,
    Image,
    Text,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import styles from './styles'

type Props = {

}

const GenreSectionListItem = (props: Props) => {
    const { item } = props

    const navigation = useNavigation()

    return (
        <Pressable
            style={({ pressed }) => [styles.container, { opacity: pressed ? 0.2 : 1 }]}
            onPress={() => navigation.navigate('Reader', { book: item })}
        >
            <View style={styles.image_container}>
                <Image source={{ uri: item.img }} style={styles.image} />
            </View>

            <Text style={styles.title}>{item.title}</Text>
        </Pressable>
    )
}

export default GenreSectionListItem
