import {CreateFilter, Filter} from "./filters";

let SimpleFilter = (filterFunction: Function): Filter => (source: number[][]) => {
    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[0].length; j++) {
            source[i][j] = filterFunction(source[i][j])
        }
    }

    return source;
}

let ExponentialFilter = (power: number) => SimpleFilter((current: number) => {
    return Math.pow(current, power)
})

let SteppedFilter = (stepSize: number) => CreateFilter((current: number) => {
    return current - (current % stepSize)
})

let FloorFilter = (floor: number) => CreateFilter((current: number) => {
    return Math.max(current, floor)
})

let CeilingFilter = (ceiling: number) => CreateFilter((current: number) => {
    return Math.min(current, ceiling)
})

export { FloorFilter, CeilingFilter, SteppedFilter, SimpleFilter, ExponentialFilter }
