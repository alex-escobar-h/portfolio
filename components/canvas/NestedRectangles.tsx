"use client";

import { useHueStore } from "@/stores/useHueStore";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const generateHuePalette = (rnd: number) => [
  `hsl(${rnd}, 40%, 58%)`,
  `hsl(${rnd}, 40%, 52%)`,
  `hsl(${rnd}, 40%, 46%)`,
  `hsl(${rnd}, 40%, 40%)`,
  `hsl(${rnd}, 40%, 35%)`,
  `hsl(${rnd}, 40%, 23%)`,
  `hsl(${rnd}, 40%, 7%)`,
];

const scaleMap = [
  { xFactor: 1, yFactor: 1 },
  { xFactor: 0.9, yFactor: 0.92 },
  { xFactor: 0.7, yFactor: 0.78 },
  { xFactor: 0.58, yFactor: 0.68 },
  { xFactor: 0.46, yFactor: 0.58 },
  { xFactor: 0.34, yFactor: 0.48 },
  { xFactor: 0.25, yFactor: 0.42 },
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

  const rectsRef = useRef(
    scaleMap.map(({ xFactor, yFactor }) => ({ xFactor, yFactor }))
  );

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

      rectsRef.current.forEach((rect, idx) => {
        const w = width * rect.xFactor;
        const h = height * rect.yFactor;
        ctx.fillStyle = palette[idx];
        ctx.fillRect(centerX - w / 2, centerY - h / 2, w, h);
      });
    };

    const resize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      draw();
    };

    const renderLoop = () => {
      draw();
      requestAnimationFrame(renderLoop);
    };

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [palette]);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "sine.inOut", duration: 1 },
      repeatDelay: 1,
    });

    rectsRef.current.forEach((rect, i) => {
      tl.to(
        rect,
        {
          xFactor: rect.xFactor * 1.1,
          yFactor: rect.yFactor * 1.1,
        },
        i * 0.1
      );
    });
  }, []);

  return (
    <canvas
      className='block w-full h-full rounded-sm'
      ref={canvasRef}
    />
  );
}
