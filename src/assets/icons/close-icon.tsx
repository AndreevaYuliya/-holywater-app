import React from 'react'

import Svg, { SvgProps, Path } from 'react-native-svg'

const CloseIcon = (props: SvgProps) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
        >
            <Path
                stroke="#0E0E16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.5 4.5 12 12m7.5 7.5L12 12m0 0-7.5 7.5 15-15"
            />
        </Svg>
    )
}

export default CloseIcon
