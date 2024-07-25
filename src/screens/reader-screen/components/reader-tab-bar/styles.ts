import { StyleSheet } from 'react-native'

import scale from '../../../../styles/pixel-ratio'

import COLORS from '../../../../constants/colors'
import FONTS from '../../../../constants/fonts'

export default StyleSheet.create({
    container: {
        height: scale(52),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: COLORS.DIVIDER_LINE,
        backgroundColor: COLORS.TAB_BAR,
    },
})
