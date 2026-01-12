/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                primitive: {
                    neutral: {
                        orchid_ash_900: "#16131B",
                        orchid_ash_800: "#1E1A24",
                        warm_ivory_50: "#F4EFE6",
                        warm_ivory_200: "#D8D0C6",
                        warm_ivory_400: "#B2AA9F",
                        warm_ivory_600: "#7C756D"
                    },
                    orchid: {
                        deep: "#B83C93",
                        core: "#E35AB8",
                        bloom: "#F040BF"
                    },
                    mint: {
                        deep: "#2FAF88",
                        core: "#66E6B2",
                        blossom: "#A7FFD8"
                    },
                    saffron: {
                        deep: "#D9943F",
                        core: "#FFB35C",
                        blossom: "#FFD6A1"
                    },
                    mist_aqua: {
                        deep: "#1A948B",
                        core: "#2AD6C9",
                        blossom: "#7FDDD6"
                    },
                    ember_coral: {
                        deep: "#D53952",
                        core: "#FF6B7A",
                        blossom: "#FBBCC2"
                    }
                },
                // Semantic aliases
                background: {
                    primary: "#16131B",   // orchid_ash_900
                    secondary: "#1E1A24", // orchid_ash_800
                    inverted: "#F4EFE6"   // warm_ivory_50
                },
                text: {
                    primary: "#F4EFE6",   // warm_ivory_50
                    secondary: "#D8D0C6", // warm_ivory_200
                    tertiary: "#B2AA9F",  // warm_ivory_400
                    disabled: "#7C756D",   // warm_ivory_600
                    inverted: "#16131B"
                },
                accent: {
                    primary: "#E35AB8",   // orchid.core
                    secondary: "#F040BF", // orchid.bloom
                    tertiary: "#B83C93",  // orchid.deep
                    deep: "#B83C93"       // orchid.deep alias
                }
            }
        },
    },
    plugins: [],
}
