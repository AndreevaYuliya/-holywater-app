import React from 'react'

import {
    View,
    Pressable,
    Text,
    FlatList,
} from 'react-native'

import Icon from '../../../../../../components/Icon'

import {
    GenreSectionListItem,
    GenreTopSectionListItem,
} from './components'

import styles from './styles'

type Props = {

}

const GenreSectionList = (props: Props) => {
    const { item } = props

    if (item.type === 'top') {
        const index = Math.ceil(item.content.length / 2)

        const content = [
            {
                id: 1,
                content: item.content.slice(0, index),
            },
            {
                id: 2,
                content: item.content.slice(index),
            },
        ]
        
        return (
            <View style={[styles.container, styles.top_section_container]}>
                <View style={styles.header}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>

                <FlatList
                    data={content}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <GenreTopSectionListItem item={item} />}
                    contentContainerStyle={styles.content_container}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Pressable 
                style={({ pressed }) => [styles.header, { opacity: pressed ? 0.2 : 1 }]}
                onPress={() => null}
            >
                <Text style={styles.title}>{item.title}</Text>

                <Icon name='arrow-right' />
            </Pressable>

            <FlatList
                data={item.content}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <GenreSectionListItem item={item} />}
                contentContainerStyle={styles.content_container}
            />
        </View>
    )
}

export default GenreSectionList
