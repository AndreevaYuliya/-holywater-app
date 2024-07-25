import React from 'react'

import Svg, {
    SvgProps,
    Path,
    Circle,
} from 'react-native-svg'

const RewardsIcon = (props: SvgProps) => {
    const { fill, stroke } = props

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={24}
            fill="none"
        >
            <Circle
                cx={12.375}
                cy={9}
                r={7}
                fill={fill}
                stroke={stroke}
                strokeWidth="2"
            />

            <Path
                fill={fill}
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                d="m7.726 15-.637 2.323c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065L17.024 15"
            />
        </Svg>
    )
}

export default RewardsIcon
