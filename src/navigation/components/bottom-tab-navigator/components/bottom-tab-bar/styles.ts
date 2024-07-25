import { StyleSheet } from 'react-native'

import COLORS from '../../../../../constants/colors'

import scale from '../../../../../styles/pixel-ratio'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: COLORS.DIVIDER_LINE,
        backgroundColor: COLORS.TAB_BAR,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        paddingTop: scale(10),
    },
    button_indicator: {
        height: scale(5),
        width: scale(5),
        marginTop: scale(9),
        borderRadius: scale(3),
    },
})
