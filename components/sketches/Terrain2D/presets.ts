import {MetaballsSource, PerlinNoiseSource} from "./sources/source";
import {MapFilter, MultiplyLayers} from "./filters/complexFilters";
import {ExponentialFilter, SteppedFilter} from "./filters/simpleFilters";
import {TerrainShader} from "./shaders/presets";
import {GradientShader} from "./shaders/shader";

const NoiseFilter = (...filters: Function[]) => {
    return (source: any) => (width: number, height: number) => filters.reduce((prev, filter) => filter(prev), source(width, height))
}

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

let Metaballs = (sketch: any) => {
    let perlinLayer = MapFilter(.5, 1)(
        PerlinNoiseSource(sketch, 100, 100)(sketch.width, sketch.height)
    )

    let noiseFilter = NoiseFilter(

        MapFilter(0, 1),
        MultiplyLayers(perlinLayer),
        SteppedFilter(.1)
    )

    let source = MetaballsSource(sketch, 10, sketch.width, sketch.height, 1000, 1)

    let heightMap = noiseFilter(source)(sketch.width, sketch.height)

    let shader = GradientShader(sketch, color(0, 10, 77), color(255, 0, 251))

    return shader(heightMap)
}

export { NoiseFilter, Metaballs, Archipelago }
