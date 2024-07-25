import React from 'react'

import {
    View,
    ViewStyle,
    StyleProp,
} from 'react-native'

import {
    ArrowRightIcon,
    CloseIcon,
    DiscoverIcon,
    LibraryIcon,
    MenuIcon,
    NavArrowLeftIcon,
    NavArrowRightIcon,
    ProfileIcon,
    RewardsIcon,
    SearchIcon,
    SettingsIcon,
} from '../../assets/icons'

type Name = 
    'arrow-right'
    | 'close'
    | 'discover'
    | 'library'
    | 'menu'
    | 'nav-arrow-left'
    | 'nav-arrow-right'
    | 'profile'
    | 'rewards'
    | 'search'
    | 'settings'

type Props = {
    name: Name
    fill?: string
    stroke?: string
    containerStyle?: StyleProp<ViewStyle>
}

const Icons = {
    'arrow-right': ArrowRightIcon,
    'close': CloseIcon,
    'discover': DiscoverIcon,
    'library': LibraryIcon,
    'menu': MenuIcon,
    'nav-arrow-left': NavArrowLeftIcon,
    'nav-arrow-right': NavArrowRightIcon,
    'profile': ProfileIcon,
    'rewards': RewardsIcon,
    'search': SearchIcon,
    'settings': SettingsIcon,
}

const Icon = (props: Props) => {
    const {
        name,
        fill,
        stroke,
        containerStyle = {},
    } = props

    const Icon = Icons[name]

    return (
        <View style={containerStyle}>
            <Icon fill={fill} stroke={stroke} />
        </View>
    )
}

export default React.memo(Icon)
