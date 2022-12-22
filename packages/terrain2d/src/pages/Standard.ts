import p5Types from "p5";
import { SketchOptions } from "sketch-utils";

import Page from "../components/page";
import { MultiplyLayers, Normalize } from "../filters";
import { TerrainShader } from "../shaders/presets";
import { PerlinNoiseSource } from "../source";
import { DrawTerrain, NoiseFilter, setup } from "../utils";

const draw = DrawTerrain((sketch: p5Types) => {
  let perlinLayer = PerlinNoiseSource(
    sketch,
    160,
    160
  )(sketch.width, sketch.height);

  let noiseFilter = NoiseFilter(MultiplyLayers(perlinLayer), Normalize(0, 1));

  let source = PerlinNoiseSource(sketch, 40, 40, 5);

  let heightMap = noiseFilter(source)(sketch.width, sketch.height);

  return TerrainShader(sketch)(heightMap);
});

const Standard: SketchOptions = { setup, draw };

export default Page(Standard);
