import { defineConfig } from 'windicss/helpers'

function range(size : number, startAt = 1) {
    return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
    attributify: false,
    safelist: [...Array(5).keys()]
        .filter((key) => key > 0)
        .map(
            (key) =>
                `grid-cols-${key} lg:grid-cols-${key} xl:grid-cols-${key} md:grid-cols-${key} sm:grid-cols-${key}`
        ),
    theme: {
        colors:{
            experimental: '#DEFD34',
            artisanat: '#F1F1F1',
            global:'#141414',
        },
        fontFamily: {
            sans: ['Helveticaneue', 'sans-serif'],
        },
    },
})