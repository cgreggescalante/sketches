import p5Types from "p5";
import { SketchOptions } from "sketch-utils";

import Page from "../components/page";
import { ExponentialFilter, MultiplyLayers, Normalize } from "../filters";
import { TerrainShader } from "../shaders/presets";
import { MetaballsSource, PerlinNoiseSource } from "../source";
import { DrawTerrain, NoiseFilter, setup } from "../utils";

const draw = DrawTerrain((sketch: p5Types) => {
  let metaballLayer = MetaballsSource(
    sketch,
    10,
    sketch.width,
    sketch.height,
    200,
    0.2
  )(sketch.width, sketch.height);

  let noiseFilter = NoiseFilter(
    MultiplyLayers(metaballLayer),
    Normalize(0, 1),
    ExponentialFilter(2),
    Normalize(0, 1)
  );

  let source = PerlinNoiseSource(sketch, 40, 40, 5);

  let heightMap = noiseFilter(source)(sketch.width, sketch.height);

  return TerrainShader(sketch)(heightMap);
});

const Archipelago: SketchOptions = { setup, draw };

export default Page(Archipelago);
