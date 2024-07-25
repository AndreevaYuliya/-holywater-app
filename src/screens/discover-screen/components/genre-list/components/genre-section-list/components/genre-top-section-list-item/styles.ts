import { StyleSheet, Dimensions } from 'react-native'

import scale from '../../../../../../../../styles/pixel-ratio'

import COLORS from '../../../../../../../../constants/colors'
import FONTS from '../../../../../../../../constants/fonts'

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - scale(60),
    },
    list_item_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: scale(80),
        height: scale(120),
        borderRadius: scale(4),
    },
    number: {
        marginHorizontal: scale(24),
        color: COLORS.TEXT_LIGHT,
        fontSize: scale(38),
        fontFamily: FONTS.BOLD,
    },
    description_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    description_right_container: {
        flex: 1,
    },
    genre: {
        textTransform: 'uppercase',
        color: COLORS.TEXT_ACCENT,
        fontSize: scale(12),
        fontFamily: FONTS.BOLD,
    },
    title: {
        marginVertical: scale(3),
        color: COLORS.TEXT_DEFAULT,
        fontSize: scale(15),
        fontFamily: FONTS.SEMI_BOLD,
    },
    reads_count: {
        color: COLORS.TEXT_LIGHT,
        fontSize: scale(13),
        fontFamily: FONTS.REGULAR,
    },
})
