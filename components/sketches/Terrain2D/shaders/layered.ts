import * as p5 from "p5";
import {Shader} from "./shader";

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

let SimpleLayer = (layerColor: p5.Color) => Layer((height: number) => layerColor)

let GradientLayer = (skt: any, v0: number, v1: number, c0: p5.Color, c1: p5.Color) => Layer((height: number) => {
    let r = skt.red(c0) + height * (skt.red(c1) - skt.red(c0))
    let g = skt.green(c0) + height * (skt.green(c1) - skt.green(c0))
    let b = skt.blue(c0) + height * (skt.blue(c1) - skt.blue(c0))

    return skt.color(r, g, b)
}, v0, v1)

export { LayeredShader, SimpleLayer, GradientLayer }
