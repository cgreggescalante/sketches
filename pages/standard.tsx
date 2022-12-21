import dynamic from "next/dynamic";
import {setup, draw} from "../components/sketches/Terrain2D/presets/Standard";
import React from "react";

// @ts-ignore
// const Panel = dynamic(import('react-p5'), { srr: false })

const Panel = React.lazy(() => import('react-p5').then(module => ({ default: module.default})))

const Standard = () => (
    <Panel setup={setup} draw={draw} />
)

export default Standard