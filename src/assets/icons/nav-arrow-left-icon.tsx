import React from 'react'

import Svg, { SvgProps, Path } from 'react-native-svg'

const NavArrowLeftIcon = (props: SvgProps) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={49}
            height={48}
            fill="none"
        >
            <Path
                stroke="#0E0E16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.25}
                d="m27.875 17-7 7 7 7"
            />
        </Svg>
    )
}

export default NavArrowLeftIcon
