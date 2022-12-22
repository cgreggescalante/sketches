import p5Types from "p5";

const PerlinNoiseSource = (sketch: p5Types, xScale: number, yScale: number, layers=1) => {
    const offsets: number[][] = []

    for (let i = 0; i < layers; i++) {
        offsets.push([Math.random() * 100000, Math.random() * 100000])
    }

    return Source((x: number, y: number) => {
        return offsets.reduce((value, offset, i) =>
            value + sketch.noise(
                offset[0] + x / (xScale / (1 + i)),
                offset[1] + y / (yScale / (1 + i))) / (i + 1),
            0
        )
    })
}

const MetaballsSource = (sketch: p5Types, metaballCount: number, width: number, height: number, radius: number, power: number) => {
    const metaballs: number[][] = []

    for (let i = 0; i < metaballCount; i++) {
        metaballs.push([sketch.random(0, width), sketch.random(0, height)])
    }

    return Source((x: number, y: number) => {
        return metaballs.reduce((maxF, metaball) => {
            let d = Math.sqrt((x - metaball[0]) ** 2 + (y - metaball[1]) ** 2)
            let f = -1 / (1 + Math.exp(-(10 * power / radius) * (d - radius))) + 1

            return f > maxF ? f : maxF
        }, 0)
    })
}

let Source = (sourceFunction: Function) => (width: number, height: number) => {
    let result: number[][] = []

    for (let i = 0; i < height; i++) {
        result.push([])
        for (let j = 0; j < width; j++) {
            result[i].push(sourceFunction(j, i))
        }
    }

    return result
}


export { PerlinNoiseSource, MetaballsSource, Source }
