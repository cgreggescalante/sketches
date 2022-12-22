import dynamic from "next/dynamic";
import Layout from "./layout";
import {SketchOptions} from "../../../lib/sketchOptions";

const Sketch = dynamic(import('react-p5'), { ssr: false })

// eslint-disable-next-line react/display-name
const Page = (options: SketchOptions) => () => (
    <Layout>
        <Sketch setup={options.setup} draw={options.draw} />
    </Layout>
)

export default Page