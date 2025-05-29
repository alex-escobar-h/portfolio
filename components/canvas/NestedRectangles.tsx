"use client";

import { useHueStore } from "@/stores/useHueStore";
import { useEffect, useRef, useState } from "react";

const generateHuePalette = (rnd: number) => [
  `hsl(${rnd}, 60%, 65%)`,
  `hsl(${rnd}, 60%, 58%)`,
  `hsl(${rnd}, 60%, 52%)`,
  `hsl(${rnd}, 60%, 46%)`,
  `hsl(${rnd}, 60%, 40%)`,
  `hsl(${rnd}, 60%, 35%)`,
  `hsl(${rnd}, 60%, 13%)`,
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
  const { hue, setHue } = useHueStore();
  const [localHue] = useState(() => Math.floor(Math.random() * 361));
  const finalHue = hue ?? localHue;

  useEffect(() => {
    if (hue === null) {
      setHue(localHue);
    }
  }, [hue, setHue, localHue]);

  const palette = generateHuePalette(finalHue);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;

      rectangleMap.forEach(({ idx, xFactor, yFactor }) => {
        const w = width * xFactor;
        const h = height * yFactor;
        ctx.fillStyle = palette[idx - 1];
        ctx.fillRect(centerX - w / 2, centerY - h / 2, w, h);
      });
    };

    const resize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      draw();
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [palette]);

  return (
    <canvas
      className='block w-full h-full rounded-sm opacity-80 animate-pulse'
      ref={canvasRef}
    />
  );
}
