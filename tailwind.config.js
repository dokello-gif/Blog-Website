/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#F5F1E8',
                charcoal: '#2C2C2C',
                magenta: {
                    DEFAULT: '#FF1493',
                    light: 'rgba(255, 20, 147, 0.2)', // 20% opacity
                },
                yellow: {
                    DEFAULT: '#FFD700',
                    light: 'rgba(255, 215, 0, 0.2)', // 20% opacity
                },
                cyan: {
                    DEFAULT: '#00CED1',
                    light: 'rgba(0, 206, 209, 0.2)', // 20% opacity
                }
            },
            fontFamily: {
                sans: ['Inter', 'Open Sans', 'sans-serif'],
                heading: ['Poppins', 'Quicksand', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1200px',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
