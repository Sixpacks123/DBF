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

    },
})