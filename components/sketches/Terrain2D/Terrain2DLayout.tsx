import Terrain2DHeader from "./Terrain2DHeader";

export default function Terrain2DLayout({ children }: { children: any }) {
    return (
        <>
            <Terrain2DHeader />
            <main>{children}</main>
        </>
    )
}