import { StyleSheet } from 'react-native'

import scale from '../../../../styles/pixel-ratio'

import COLORS from '../../../../constants/colors'
import FONTS from '../../../../constants/fonts'

export default StyleSheet.create({
    container: {
        height: scale(56),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scale(63),
        marginBottom: scale(76),
        borderRadius: scale(56),
        backgroundColor: COLORS.BUTTON_BACKGROUND,
    },
    title: {
        color: COLORS.BUTTON_TITLE,
        fontSize: scale(17),
        fontFamily: FONTS.EXTRA_BOLD,
    },
})
