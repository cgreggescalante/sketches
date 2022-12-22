import {GradientLayer, LayeredShader, SimpleLayer} from "./layered";
import p5Types from "p5";

let TerrainShader = (p5: p5Types) => LayeredShader(
    [
        // Water
        [.21, GradientLayer(p5, 0, .1, p5.color(0, 50, 90), p5.color(0, 104, 196))],
        // Sand
        [.22, SimpleLayer(p5.color(248, 208, 146))],
        // Grass / Trees
        [.55, GradientLayer(p5, .23, .55, p5.color(104, 159, 56), p5.color(34, 98, 37))],
        // Low Mountains
        [.7, SimpleLayer(p5.color(74, 48, 46))],
        // High Mountains
        [.8, SimpleLayer(p5.color(108, 103, 96))],
        // Snow
        [1, SimpleLayer(p5.color(225, 230, 250))]
    ]
)

export { TerrainShader }
