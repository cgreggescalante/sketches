import {Shader} from "./shader";
import p5Types, {Color} from "p5";

let LayeredShader = (layers: any[]) => Shader((height: number) => {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i][0] >= height) {
            return layers[i][1](height)
        }
    }

    return color(0)
})

let Layer = (layerFunction: Function, minHeight=0, maxHeight=1) => (height: number) => {
    return layerFunction((height - minHeight) / (maxHeight - minHeight))
}

let SimpleLayer = (layerColor: Color) => Layer((height: number) => layerColor)

let GradientLayer = (p5: p5Types, v0: number, v1: number, c0: Color, c1: Color) => Layer((height: number) => {
    let r = p5.red(c0) + height * (p5.red(c1) - p5.red(c0))
    let g = p5.green(c0) + height * (p5.green(c1) - p5.green(c0))
    let b = p5.blue(c0) + height * (p5.blue(c1) - p5.blue(c0))

    return p5.color(r, g, b)
}, v0, v1)

export { LayeredShader, SimpleLayer, GradientLayer }
