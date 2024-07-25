import React from 'react'

import {
    Pressable,
    StyleProp,
    ViewStyle,
} from 'react-native'

import Icon from '../Icon'

import styles from './styles'

type Props = {
    navigate: 'prev' | 'next'
    disabled: boolean
    onPress: () => void
    containerStyle?: StyleProp<ViewStyle>
}

const NavArrowButton = (props: Props) => {
    const {
        navigate,
        disabled,
        onPress,
        containerStyle = {},
    } = props
    
    return (
        <Pressable
            disabled={disabled}
            style={({ pressed }) => [styles.container, containerStyle, { opacity: pressed ? 0.2 : 1 }]}
            onPress={onPress}
        >
            <Icon name={navigate === 'prev' ? 'nav-arrow-left' : 'nav-arrow-right'} />
        </Pressable>
    )
}

export default NavArrowButton
