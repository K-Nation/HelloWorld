module.exports = {
    content: [
        './public/**/*.{html,js}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: 'Ubuntu, sans-serif',
            },
            colors: {
                'theme-green': '#64f4ac',
                'theme-gray': '#2d2e32',
                'theme-gray-dark': '#25262a'
            }
        }
    },
}
