let PerlinNoiseSource = (sketch: any, xScale: number, yScale: number, layers=1) => {
    let offsets: number[][] = []

    for (let i = 0; i < layers; i++) {
        offsets.push([Math.random() * 100000, Math.random() * 100000])
    }

    return Source((x: number, y: number) => {
        let value = 0;

        for (let i = 1; i <= layers; i++) {
            value += sketch.noise(offsets[i - 1][0] + x / (xScale * (1 / i)), offsets[i - 1][1] + y / (yScale * (1 / i))) / i
        }

        return value
    })
}


let MetaballsSource = (sketch: any, metaballCount: number, width: number, height: number, radius: number, power: number) => {
    let metaballs: number[][] = []

    for (let i = 0; i < metaballCount; i++) {
        metaballs.push([sketch.random(0, width), sketch.random(0, height)])
    }

    return Source((x: number, y: number) => {
        let maxF = 0;

        for (let i = 0; i < metaballCount; i++) {
            let d = Math.sqrt((x - metaballs[i][0]) ** 2 + (y - metaballs[i][1]) ** 2)
            let f = -1 / (1 + Math.exp(-(10 * power / radius) * (d - radius))) + 1
            if (f > maxF) {
                maxF = f;
            }
        }

        return maxF
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
