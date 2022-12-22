import p5Types from 'p5';

export interface SketchOptions {
  setup: (p5: p5Types, canvas: Element) => void;
  draw: (p5: p5Types) => void;
}
