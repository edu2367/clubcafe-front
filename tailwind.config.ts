import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // "Heading" será Outfit (Títulos)
                heading: ["var(--font-heading)", "sans-serif"],
                // "Body" será DM Sans (Textos normales)
                body: ["var(--font-body)", "sans-serif"],
                // Mantenemos sans/serif por si acaso, apuntando a las nuevas
                sans: ["var(--font-body)", "sans-serif"],
                serif: ["var(--font-heading)", "serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;