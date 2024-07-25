import React from 'react'

import {
    Pressable,
    View,
    Image,
    Text,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import scale from '../../../../../../../../styles/pixel-ratio'

type Props = {

}

const GenreTopSectionListItem = (props: Props) => {
    const { item } = props

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            {
                item.content.map((book, index) => (
                    <Pressable
                        key={book.id}
                        style={({ pressed }) => [
                            styles.list_item_container,
                            {
                                marginBottom: (index !== item.content.length - 1) ? scale(20) : 0,
                                opacity: pressed ? 0.2 : 1,
                            },
                        ]}
                        onPress={() => navigation.navigate('Reader', { book: item })}
                    >
                        <Image
                            source={{ uri: book.img }}
                            style={styles.image}
                        />

                        <View style={styles.description_container}>
                            <Text style={styles.number}>{book.number}</Text>

                            <View style={styles.description_right_container}>
                                <Text style={styles.genre}>{book.genre}</Text>
                                <Text style={styles.title}>{book.title}</Text>
                                <Text style={styles.reads_count}>{book.reads_count}</Text>
                            </View>
                        </View>
                    </Pressable>
                ))
            }
        </View>
    )
}

export default GenreTopSectionListItem
