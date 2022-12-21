import dynamic from "next/dynamic";
import {setup, draw} from "../../components/sketches/Terrain2D/presets/Standard";
import Terrain2DLayout from "../../components/sketches/Terrain2D/Terrain2DLayout";

const Sketch = dynamic(import('react-p5'), { ssr: false })

// TODO: Sketches are rendered stretched and duplicated on mobile devices
const Standard = () => (
    <Terrain2DLayout>
        <Sketch setup={setup} draw={draw} />
    </Terrain2DLayout>
)

export default Standard