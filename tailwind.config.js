/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#10B981', // Emerald 500
                    dark: '#059669', // Emerald 600
                    light: '#34D399', // Emerald 400
                },
                secondary: {
                    DEFAULT: '#3B82F6', // Blue 500
                    dark: '#2563EB', // Blue 600
                },
                dark: {
                    DEFAULT: '#111827', // Gray 900
                    lighter: '#1F2937', // Gray 800
                    card: 'rgba(31, 41, 55, 0.7)', // Glassmorphism base
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
