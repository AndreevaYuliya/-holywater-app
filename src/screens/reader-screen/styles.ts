import { StyleSheet } from 'react-native'

import scale from '../../styles/pixel-ratio'

import COLORS from '../../constants/colors'
import FONTS from '../../constants/fonts'

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.SCREEN_BACKGROUND,
    },
    header: {
        height: scale(52),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: scale(20),
        borderBottomWidth: 1,
        borderBottomColor: COLORS.DIVIDER_LINE,
    },
    close_button: {
        position: 'absolute',
        left: scale(20),
    },
    title: {
        color: COLORS.TEXT_DEFAULT,
        fontSize: scale(22),
        fontFamily: FONTS.EXTRA_BOLD,
    },
    content_container: {
        paddingHorizontal: scale(20),
    },
})
