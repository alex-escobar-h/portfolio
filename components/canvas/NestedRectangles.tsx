"use client";
import { useEffect, useRef } from "react";

const colorPalettes = [
  [
    "hsl(90, 5%, 65%)",
    "hsl(90, 5%, 58%)",
    "hsl(90, 5%, 52%)",
    "hsl(90, 5%, 46%)",
    "hsl(90, 5%, 40%)",
    "hsl(90, 5%, 35%)",
    "hsl(90, 5%, 15%)",
  ],
];

const rectangleMap = [
  { idx: 1, xFactor: 1, yFactor: 1 },
  { idx: 2, xFactor: 0.9, yFactor: 0.92 },
  { idx: 3, xFactor: 0.7, yFactor: 0.78 },
  { idx: 4, xFactor: 0.58, yFactor: 0.68 },
  { idx: 5, xFactor: 0.46, yFactor: 0.58 },
  { idx: 6, xFactor: 0.34, yFactor: 0.48 },
  { idx: 7, xFactor: 0.25, yFactor: 0.42 },
];

export default function NestedRectanglesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const paletteRef = useRef(colorPalettes[0]);
  // const paletteRef = useRef(
  //   colorPalettes[Math.floor(Math.random() * colorPalettes.length)]
  // );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio + 2;

    const resize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      draw();
    };

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;

      rectangleMap.forEach(({ idx, xFactor, yFactor }) => {
        const w = width * xFactor;
        const h = height * yFactor;
        ctx.fillStyle = paletteRef.current[idx - 1];
        ctx.fillRect(centerX - w / 2, centerY - h / 2, w, h);
      });
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      height={"100%"}
      width={"100%"}
      className='block w-full h-full rounded-sm opacity-80'
      ref={canvasRef}
    />
  );
}
