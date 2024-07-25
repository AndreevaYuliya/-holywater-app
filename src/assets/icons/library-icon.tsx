import React from 'react'

import Svg, { SvgProps, Path } from 'react-native-svg'

const LibraryIcon = (props: SvgProps) => {
    const { fill, stroke } = props

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={24}
            fill="none"
        >
            <Path
                fill={fill}
                stroke={stroke}
                strokeWidth="2"
                d="M19.875 6v14l-6.34-4.755-.6.8.6-.8a1.1 1.1 0 0 0-1.32 0L5.875 20V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3Z"
            />
        </Svg>
    )
}

export default LibraryIcon
