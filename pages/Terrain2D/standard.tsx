import dynamic from "next/dynamic";
import {setup, draw} from "../../components/sketches/Terrain2D/presets/Standard";

const Sketch = dynamic(import('react-p5'), { ssr: false })

const Standard = () => (
    <Sketch setup={setup} draw={draw} />
)

export default Standard