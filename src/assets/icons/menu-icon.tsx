import React from 'react'

import Svg, { SvgProps, Rect } from 'react-native-svg'

const MenuIcon = (props: SvgProps) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={49}
            height={48}
            fill="none"
        >
            <Rect width={18} height={2} x={15.875} y={17.5} fill="#0E0E16" rx={1} />
            <Rect width={18} height={2} x={15.875} y={23} fill="#0E0E16" rx={1} />
            <Rect width={18} height={2} x={15.875} y={28.5} fill="#0E0E16" rx={1} />
        </Svg>
    )
}

export default MenuIcon
