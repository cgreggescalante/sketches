import { DynamicSketch, SketchOptions } from "sketch-utils";

import Layout from "./layout";

// eslint-disable-next-line react/display-name
const Page = (options: SketchOptions) => () =>
  (
    <Layout>
      <DynamicSketch options={options} />
    </Layout>
  );

export default Page;
