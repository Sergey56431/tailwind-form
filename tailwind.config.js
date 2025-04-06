/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/**/*.{html,js}', // укажите путь к вашим файлам
    ],
    theme: {
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
        },
        extend: {
            colors: {
                red: {
                    400: '#EB4E72',
                    800: '#B13A3E'
                }
            }
        },
    },
    plugins: [],
}