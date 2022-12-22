export interface Filter {
  (source: number[][]): number[][];
}

export interface FilterFunction {
  (source: any, x: number, y: number): number;
}

export const MultiplyLayers = (multipliers: number[][], factor = 1) =>
  CreateFilter((source: any, x: number, y: number) => {
    return source[y][x] * multipliers[y][x] * factor;
  });

export const CircleFilter = (radius: number, power = 1) =>
  CreateFilter((source: any, x: number, y: number) => {
    const d = Math.sqrt(
      (source.length / 2 - y) ** 2 + (source[0].length / 2 - x) ** 2
    );

    const f = -1 / (1 + Math.exp(-((10 * power) / radius) * (d - radius))) + 1;

    return source[y][x] * f;
  });

export const Normalize =
  (outputMin: number, outputMax: number): Filter =>
  (source: number[][]) => {
    let inputMax = -Infinity;
    let inputMin = Infinity;

    source.flat().forEach((p) => {
      inputMax = p > inputMax ? p : inputMax;
      inputMin = p < inputMin ? p : inputMin;
    });

    const normalize = (n: number) =>
      ((n - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) +
      outputMin;

    return source.map((row) => row.map((value) => normalize(value)));
  };

export const ExponentialFilter = (power: number) =>
  CreateFilter((source: any, x: number, y: number): number => {
    return Math.pow(source[y][x], power);
  });

export const SteppedFilter = (stepSize: number) =>
  CreateFilter((source: any, x: number, y: number): number => {
    return source[y][x] - (source[y][x] % stepSize);
  });

export const FloorFilter = (floor: number) =>
  CreateFilter((source: any, x: number, y: number): number => {
    return Math.max(source[y][x], floor);
  });

export const CeilingFilter = (ceiling: number) =>
  CreateFilter((source: any, x: number, y: number): number => {
    return Math.min(source[y][x], ceiling);
  });

export const CreateFilter =
  (filterFunction: FilterFunction): Filter =>
  (source: number[][]): number[][] =>
    source.map((row, i) => row.map((value, j) => filterFunction(source, j, i)));
