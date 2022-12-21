let MultiplyLayers = (multipliers: number[][], factor=1) => ComplexFilter((source: any, x: number, y: number) => {
    return source[y][x] * multipliers[y][x] * factor
})

let CircleFilter = (radius: number, power=1) => ComplexFilter((source: any, x: number, y: number) => {
    let d = Math.sqrt((source.length / 2 - y) ** 2 + (source[0].length / 2 - x) ** 2)

    let f = -1 / (1 + Math.exp(-(10 * power / radius) * (d - radius))) + 1

    return source[y][x] * f
})

let MapFilter = (outMin: number, outMax: number) => (source: number[][]) => {
    let inMax = -Infinity;
    let inMin = Infinity;

    source.forEach(row => row.forEach(
        p => {
            if (inMax < p) {
                inMax = p
            }
            if (inMin > p) {
                inMin = p
            }
        }
    ))

    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < source[0].length; j++) {
            source[i][j] = (source[i][j] - inMin) / (inMax - inMin) * (outMax - outMin) + outMin
        }
    }

    return source
}

let ComplexFilter = (filterFunction: Function) => (source: number[][]) => {
    let result: number[][] = []

    for (let i = 0; i < source.length; i++) {
        result.push([])
        for (let j = 0; j < source[0].length; j++) {
            result[i].push(filterFunction(source, j, i))
        }
    }

    return result
}

export { MultiplyLayers, MapFilter, ComplexFilter, CircleFilter }
