import dynamic from "next/dynamic";
import {setup, draw} from "../../components/sketches/Terrain2D/presets/Archipelago";
import Terrain2DLayout from "../../components/sketches/Terrain2D/Terrain2DLayout";

const Sketch = dynamic(import('react-p5'), { ssr: false })

const Archipelago = () => (
    <Terrain2DLayout>
        <Sketch setup={setup} draw={draw} />
    </Terrain2DLayout>
)

export default Archipelago