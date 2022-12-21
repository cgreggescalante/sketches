import Terrain2DHeader from "./Terrain2DHeader";

const Terrain2DLayout = ({ children }: { children: any }) => (
    <>
        <Terrain2DHeader />
        <main>{children}</main>
    </>
)

export default Terrain2DLayout