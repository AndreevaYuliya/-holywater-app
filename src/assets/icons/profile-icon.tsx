import React from 'react'

import Svg, {
    SvgProps,
    Path,
    G,
    Circle,
    Defs,
    ClipPath,
} from 'react-native-svg'

const ProfileIcon = (props: SvgProps) => {
    const { fill, stroke } = props

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={24}
            fill="none"
        >
            <G clipPath="url(#a)">
                <Circle
                    cx={12.125}
                    cy={23.06}
                    r={8.06}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth="2"
                />
            </G>

            <Circle
                cx={12.125}
                cy={7.25}
                r={4.25}
                fill={fill}
                stroke={stroke}
                strokeWidth="2"
            />

            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" d="M2.125 14h20v8h-20z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default ProfileIcon
