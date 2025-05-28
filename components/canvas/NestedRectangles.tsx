"use client";
import { useEffect, useRef } from "react";

const colorPalettes = [
  ["#a27ea1", "#8e6f8d", "#7a5f79", "#664f65", "#513f50", "#3d2f3c", "#292028"],
  ["#c7851a", "#ae7416", "#956413", "#7d5310", "#64420d", "#4b320a", "#322106"],
  ["#7cb900", "#6ea500", "#619000", "#537c00", "#456700", "#375200", "#293e00"],
  ["#693acc", "#5c32b3", "#4f2b99", "#422480", "#341d66", "#27164c", "#1a0e33"],
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
  const paletteRef = useRef(
    colorPalettes[Math.floor(Math.random() * colorPalettes.length)]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio;

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
      className='block w-full h-full'
      ref={canvasRef}
    />
  );
}
