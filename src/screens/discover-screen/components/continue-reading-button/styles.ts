import { StyleSheet } from 'react-native'

import COLORS from '../../../../constants/colors'
import FONTS from '../../../../constants/fonts'

import scale from '../../../../styles/pixel-ratio'

export default StyleSheet.create({
    container: {
        height: scale(53),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: scale(20),
        borderTopWidth: 1,
        borderTopColor: COLORS.DIVIDER_LINE,
    },
    image: {
        width: scale(26),
        height: scale(39),
        borderRadius: scale(4),
    },
    text_container: {
        flex: 1,
        paddingHorizontal: scale(12),
    },
    text: {
        color: COLORS.TEXT_SECOND,
        fontSize: scale(12),
        fontFamily: FONTS.MEDIUM,
    },
    title: {
        marginTop: scale(1),
        color: COLORS.TEXT_DEFAULT,
        fontSize: scale(14),
        fontFamily: FONTS.SEMI_BOLD,
    },
})
