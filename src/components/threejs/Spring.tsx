import React, { useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
type Props = {
    name: string
    color: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: Props) => {
    const [btnClick, setBtnClick] = useState<boolean>(true)
    const { x } = useSpring({
        from: { x: 0 },
        x: btnClick ? 0.7: 0,
        config: { duration: 1000}

    })
    return (
        <div onClick={() => {
            setBtnClick(!btnClick)
        }}>
            <animated.button onClick={props.onClick} className={`text-white text-sm  cursor-pointer bg-[#2F58CD] rounded-lg w-[250px] shadow px-2 py-4 text-center`} 
            style={{
                opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
                scale: x.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                }),
            }}>
                {props.name}
            </animated.button>
        </div>
    )
}

export default Button