import React from 'react'

import { View, Pressable } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Icon from '../../../../../components/Icon'

import scale from '../../../../../styles/pixel-ratio'

import COLORS from '../../../../../constants/colors'

import styles from './styles'

const BottomTabBar = (props) => {
    const {
        state,
        descriptors,
        navigation,
    } = props

    const safeAreaInsets = useSafeAreaInsets()

    const onPress = (route, isFocused) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        })

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
        }
    }

    const renderLabel = (route, index) => {
        const { options } = descriptors[route.key]

        const label =
            options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name

        const isFocused = state.index === index

        return (
            <Pressable
                key={route.key}
                style={styles.button}
                onPress={() => onPress(route, isFocused)}
            >
                {renderLablelIcon(label, isFocused)}

                <View
                    style={[
                        styles.button_indicator,
                        { backgroundColor: isFocused ? COLORS.TAB_BAR_ICON_ACTIVE : 'transparent' },
                    ]}
                />
            </Pressable>
        )
    }

    const renderLablelIcon = (label: string, isFocused: boolean) => {
        let name = null

        switch (label) {
            case 'Library':
                name = 'library'
                break
            case 'Discover':
                name = 'discover'
                break
            case 'Rewards':
                name = 'rewards'
                break
            case 'Profile':
                name = 'profile'
                break
            default:
                name = null
        }

        if (name) {
            return (
                <Icon
                    name={name}
                    fill={isFocused ? COLORS.TAB_BAR_ICON_ACTIVE : 'transparent'}
                    stroke={isFocused ? COLORS.TAB_BAR_ICON_ACTIVE : COLORS.TAB_BAR_ICON_DEFAULT}
                />
            )
        }

        return null
    }

    return (
        <View
            style={[
                styles.container,
                {
                    height: scale(52) + safeAreaInsets.bottom,
                    paddingBottom: safeAreaInsets.bottom,
                },
            ]}
        >
            {state.routes.map(renderLabel)}
        </View>
    )
}

export default BottomTabBar
