import {DrawTerrain, NoiseFilter, setup} from "../Terrain2D";
import {PerlinNoiseSource} from "../sources/source";
import {CircleFilter, MapFilter, MultiplyLayers} from "../filters/complexFilters";
import {TerrainShader} from "../shaders/presets";

const Shader = (sketch: any) => {
    let perlinLayer = PerlinNoiseSource(sketch, 160, 160)(sketch.width, sketch.height)

    let noiseFilter = NoiseFilter(
        CircleFilter(sketch.width * .35, .3),
        MultiplyLayers(perlinLayer),
        MapFilter(0, 1)
    )

    let source = PerlinNoiseSource(sketch, 40, 40, 5)

    let heightMap = noiseFilter(source)(sketch.width, sketch.height)

    return TerrainShader(sketch)(heightMap)
}

const draw = DrawTerrain(Shader)

export { setup, draw }