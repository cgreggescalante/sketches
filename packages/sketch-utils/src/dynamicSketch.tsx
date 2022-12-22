import dynamic from "next/dynamic";
import { SketchOptions } from "sketch-utils";

const Sketch = dynamic(import("react-p5"), { ssr: false });

// eslint-disable-next-line react/display-name
const DynamicSketch = ({ options }: { options: SketchOptions }) => (
  <Sketch setup={options.setup} draw={options.draw} />
);

export default DynamicSketch;
