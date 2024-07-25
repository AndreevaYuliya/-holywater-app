import { StyleSheet } from 'react-native'

import COLORS from '../../../../../../constants/colors'
import FONTS from '../../../../../../constants/fonts'

import scale from '../../../../../../styles/pixel-ratio'

export default StyleSheet.create({
    container: {
        paddingTop: scale(20),
    },
    top_section_container: {
        paddingBottom: scale(60),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: scale(16),
        paddingHorizontal: scale(20),
        paddingBottom: scale(15),
    },
    title: {
        marginRight: scale(4),
        color: COLORS.TEXT_DEFAULT,
        fontSize: scale(24),
        fontFamily: FONTS.EXTRA_BOLD,
    },
    content_container: {
        paddingHorizontal: scale(20),
        gap: scale(20),
    },
})
