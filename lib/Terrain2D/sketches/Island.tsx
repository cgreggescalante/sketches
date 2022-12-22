import {DrawTerrain, NoiseFilter, setup} from "./_Terrain2D";
import {PerlinNoiseSource} from "../source";
import {CircleFilter, Normalize, MultiplyLayers} from "../filters";
import {TerrainShader} from "../shaders/presets";
import p5Types from "p5";
import {SketchOptions} from "../../sketchOptions";


const draw = DrawTerrain((sketch: p5Types) => {
    let perlinLayer = PerlinNoiseSource(sketch, 160, 160)(sketch.width, sketch.height)

    let noiseFilter = NoiseFilter(
        CircleFilter(sketch.width * .35, .3),
        MultiplyLayers(perlinLayer),
        Normalize(0, 1)
    )

    let source = PerlinNoiseSource(sketch, 40, 40, 5)

    let heightMap = noiseFilter(source)(sketch.width, sketch.height)

    return TerrainShader(sketch)(heightMap)
})

const Island: SketchOptions = { setup, draw }

export default Island