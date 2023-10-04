/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            accent: '#0060f8',
            black: '#000000',
            grey: '#666666',
            background: '#f6f6f6',
            transparent: 'transparent',
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-graphik)'],
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
}
