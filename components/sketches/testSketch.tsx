import p5Types from "p5";

const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(1000, 1000).parent(canvasParentRef)
}

const draw = (p5: p5Types) => {
    p5.background(100, 2, 100)
    p5.circle(p5.width / 2, p5.height / 2, 200)
}

export { setup, draw }
