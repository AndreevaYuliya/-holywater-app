import { StyleSheet, Dimensions } from 'react-native'

import scale from '../../../../../../../../styles/pixel-ratio'

import COLORS from '../../../../../../../../constants/colors'
import FONTS from '../../../../../../../../constants/fonts'

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2 - scale(40),
    },
    image_container: {
        height: scale(222),
    },
    image: {
        flex: 1,
        borderRadius: scale(4),
    },
    title: {
        marginTop: scale(7),
        color: COLORS.TEXT_LIGHT,
        fontSize: scale(13),
        fontFamily: FONTS.MEDIUM,
    },
})
