import p5Types from "p5";
import { Color } from "p5"


const setup = (p5: p5Types, canvasParentRef: Element) => {
  p5.createCanvas(1000, 1000).parent(canvasParentRef)
}

const DrawTerrain = (terrainType: ((c: any) => Color[][])) => (p5: p5Types) => {
  let result = terrainType(p5)

  p5.loadPixels()

  for (let i = 0; i < p5.height; i++) {
    for (let j = 0; j < p5.width; j++) {
      p5.pixels[(i * p5.width + j) * 4] = p5.red(result[i][j]);
      p5.pixels[(i * p5.width + j) * 4 + 1] = p5.green(result[i][j]);
      p5.pixels[(i * p5.width + j) * 4 + 2] = p5.blue(result[i][j]);
      p5.pixels[(i * p5.width + j) * 4 + 3] = 255;
    }
  }

  p5.updatePixels()

  p5.noLoop()
}

const NoiseFilter = (...filters: Function[]) => {
  return (source: any) => (width: number, height: number) => filters.reduce((prev, filter) => filter(prev), source(width, height))
}

export { setup, DrawTerrain, NoiseFilter }