import p5Types, {Color} from "p5";

let GradientShader = (p5: p5Types, start: Color, finish: Color, startValue=0, finishValue=1) =>
    Shader((height: number) => {
        let normalized = (height - startValue) / finishValue

        let r = p5.red(start) + normalized * (p5.red(finish) - p5.red(start))
        let g = p5.green(start) + normalized * (p5.green(finish) - p5.green(start))
        let b = p5.blue(start) + normalized * (p5.blue(finish) - p5.blue(start))

        return p5.color(r, g, b)
    })

let Shader = (shaderFunction: Function) => (heightMap: number[][]) => {
    let result: Color[][] = []

    for (let i = 0; i < heightMap.length; i++) {
        result.push([])
        for (let j = 0; j < heightMap[0].length; j++) {
            result[i].push(shaderFunction(heightMap[i][j]))
        }
    }

    return result
}

export { Shader, GradientShader }
