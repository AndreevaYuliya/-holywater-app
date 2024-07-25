import { Dimensions, PixelRatio } from 'react-native'

const { height } = Dimensions.get('window')

const designHeight = 812
const heightRation = height / designHeight

const scale = (size: number) => {
    return PixelRatio.roundToNearestPixel(size * heightRation)
}

export default scale
