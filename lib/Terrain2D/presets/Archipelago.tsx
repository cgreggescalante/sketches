import {MetaballsSource, PerlinNoiseSource} from "../sources/source";
import {MapFilter, MultiplyLayers} from "../filters/complexFilters";
import {ExponentialFilter} from "../filters/simpleFilters";
import {TerrainShader} from "../shaders/presets";
import {DrawTerrain, NoiseFilter, setup} from "../Terrain2D";

let Archipelago = (sketch: any) => {
    let metaballLayer = MetaballsSource(sketch, 10, sketch.width, sketch.height, 200, .2)(sketch.width, sketch.height)

    let noiseFilter = NoiseFilter(
        MultiplyLayers(metaballLayer),
        MapFilter(0, 1),
        ExponentialFilter(2),
        MapFilter(0, 1)
    )

    let source = PerlinNoiseSource(sketch, 40, 40, 5)

    let heightMap = noiseFilter(source)(sketch.width, sketch.height)

    return TerrainShader(sketch)(heightMap)
}

const draw = DrawTerrain(Archipelago)

export { setup, draw }