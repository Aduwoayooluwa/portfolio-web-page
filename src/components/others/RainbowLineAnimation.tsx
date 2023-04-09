import React, { useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'

const RainbowLineAnimation: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null)
    const [{ x }, set] = useSpring(() => ({ x: 0, config: { mass: 5, tension: 350, friction: 40 } }))
    useGesture(
        {
        onMove: ({ xy: [x] }) => {
            if (svgRef.current) {
            const { width } = svgRef.current?.getBoundingClientRect()
            set({ x: (x / width) * 100 })
            }
        },
        },
        { domTarget: svgRef }
    )

    return (
        <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', position: 'absolute', top: 10, left: 0, zIndex: 20 }}
        >
        <defs>
            <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="16.67%" stopColor="#ff8000" />
            <stop offset="33.33%" stopColor="#ffff00" />
            <stop offset="50%" stopColor="#00ff00" />
            <stop offset="66.67%" stopColor="#00ffff" />
            <stop offset="83.33%" stopColor="#0000ff" />
            <stop offset="100%" stopColor="#ff00ff" />
            </linearGradient>
            <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="glow" />
            <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="glow" />
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
            </filter>
        </defs>
        <animated.path
            d="M0 50 Q 50 70 100 50 Q 150 30 200 50 Q 250 70 300 50 Q 350 30 400 50 Q 450 70 500 50 Q 550 30 600 50 Q 650 70 700 50 Q 750 30 800 50 Q 850 70 900 50 Q 950 30 1000 50"
            stroke="url(#rainbowGradient)"
            strokeWidth="0.1"
            fill="none"
            strokeDasharray="5,5"
            strokeDashoffset={x.interpolate((x) => `${-x}%`)}
            filter="url(#glow)"
        />
        </svg>
    )
}

export default RainbowLineAnimation
