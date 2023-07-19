import localFont from 'next/font/local'

export const TheFont = localFont({
    src: [
        {
            path: '../assets/fonts/font_white.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/font_bold.woff2',
            weight: '600',
            style: 'bold',
        }
    ],
})