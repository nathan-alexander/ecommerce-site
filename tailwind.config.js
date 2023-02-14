/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                digital: "url('/images/digital.jpg')",
                fashion: "url('/images/fashion.jpg')",
                passportleft: "url('/images/passportleft.jpeg')",
                passportright: "url('/images/passportright.jpg')",
                passport: "url('/images/passport.png')",
                skybg: "url('/images/sky-bg.jpg')",
            },
            fontFamily: {
                sans: ['Unbounded', 'sans-serif'],
            },
            textShadow: {
                sm: '0 1px 2px rgba(0, 0, 0, 0.8)',
                DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.8)',
                lg: '0 8px 16px rgba(0, 0, 0, 0.8)',
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            )
        }),
    ],
}
