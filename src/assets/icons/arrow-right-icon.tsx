import React from 'react'

import Svg, { SvgProps, Path } from 'react-native-svg'

const ArrowRightIcon = (props: SvgProps) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={21}
            fill="none"
        >
            <Path
                stroke="#848694"
                strokeLinecap="round"
                strokeWidth={2}
                d="m7.5 4.5 6 6-6 6"
            />
        </Svg>
    )
}

export default ArrowRightIcon
