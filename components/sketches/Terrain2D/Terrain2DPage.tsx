import dynamic from "next/dynamic";
import p5Types from "p5";
import Terrain2DLayout from "./Terrain2DLayout";

const Sketch = dynamic(import('react-p5'), { ssr: false })

// eslint-disable-next-line react/display-name
const Terrain2DPage = (setup: (p5: p5Types, canvas: Element) => void, draw: (p5: p5Types) => void) => () => (
    <Terrain2DLayout>
        <Sketch setup={setup} draw={draw} />
    </Terrain2DLayout>
)

export default Terrain2DPage