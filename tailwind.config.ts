const defaultTheme = require('tailwindcss/defaultTheme')
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            spacing: {
                18: '4.5rem',
            },
            fontFamily: {
                sans: ['var(--font-nunito)', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#1EC1B1',
                text: '#252525',
            },
        },
    },
    plugins: [],
}

export default config
