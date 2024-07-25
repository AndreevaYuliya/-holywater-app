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
        alignItems: 'flex-end',
        paddingHorizontal: scale(20),
        borderBottomWidth: 1,
        borderBottomColor: COLORS.DIVIDER_LINE,
    },
    search_button: {
        flex: 0,
        height: scale(52),
    },
    title_container: {
        height: scale(52),
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        color: COLORS.TEXT_DEFAULT,
        fontSize: scale(38),
        fontFamily: FONTS.EXTRA_BOLD,
    },
    content_container: {
        paddingBottom: scale(174),
    },
})
