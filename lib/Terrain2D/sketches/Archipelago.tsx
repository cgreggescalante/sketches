import {MetaballsSource, PerlinNoiseSource} from "../source";
import {Normalize, MultiplyLayers, ExponentialFilter} from "../filters";
import {TerrainShader} from "../shaders/presets";
import {DrawTerrain, NoiseFilter, setup} from "./_Terrain2D";
import p5Types from "p5";
import {SketchOptions} from "../../sketchOptions";


const draw = DrawTerrain((sketch: p5Types) => {
    let metaballLayer = MetaballsSource(sketch, 10, sketch.width, sketch.height, 200, .2)(sketch.width, sketch.height)

    let noiseFilter = NoiseFilter(
        MultiplyLayers(metaballLayer),
        Normalize(0, 1),
        ExponentialFilter(2),
        Normalize(0, 1)
    )

    let source = PerlinNoiseSource(sketch, 40, 40, 5)

    let heightMap = noiseFilter(source)(sketch.width, sketch.height)

    return TerrainShader(sketch)(heightMap)
})

const Archipelago: SketchOptions = { setup, draw }

export default Archipelago
