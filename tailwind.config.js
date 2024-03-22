/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    // "primary": "#7469B6",
                    // "secondary": "#B1B2FF",
                    // "accent": "#AAC4FF",
                    // "neutral": "#756AB6",
                    // "base-100": "#EEF1FF",
                    // "info": "#AEE2FF",
                    // "success": "#A5DD9B",
                    // "warning": "#FEBE8C",
                    // "error": "#FF8080",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}

