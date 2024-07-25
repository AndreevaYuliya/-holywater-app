import { StyleSheet, Dimensions } from 'react-native'

import scale from '../../../../../../styles/pixel-ratio'

import COLORS from '../../../../../../constants/colors'
import FONTS from '../../../../../../constants/fonts'

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - scale(40),
    },
    label: {
        marginTop: scale(10),
        textTransform: 'uppercase',
        color: COLORS.TEXT_ACCENT,
        fontSize: scale(12),
        fontFamily: FONTS.BOLD,
    },
    title: {
        marginBottom: scale(12),
        color: COLORS.TEXT_DEFAULT,
        fontSize: scale(20),
        fontFamily: FONTS.SEMI_BOLD,
    },
    image: {
        flex: 1,
        height: scale(208),
        borderRadius: scale(8),
    },
})
