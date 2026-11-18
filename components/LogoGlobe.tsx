"use client";

import { useEffect, useRef } from "react";
import { OptimizedImage } from "@/components/OptimizedImage";

type Point = {
  x: number;
  y: number;
  z: number;
  tone: number;
};

/** Spadasoft-style particle globe in QNVO blues — canvas only, no WebGL dependency. */
export function LogoGlobe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducePoints = window.matchMedia("(max-width: 700px)").matches || window.devicePixelRatio > 2;
    const count = reducePoints ? 720 : 1100;
    const points: Point[] = [];

    // Fibonacci sphere for an even globe shell.
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i += 1) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = golden * i;
      points.push({
        x: Math.cos(theta) * radiusAtY,
        y,
        z: Math.sin(theta) * radiusAtY,
        tone: (i % 5) / 5,
      });
    }

    let frame = 0;
    let running = true;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let rotY = 0;
    let rotX = 0.22;
    let targetRotX = 0.22;
    let targetRotY = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const size = Math.min(parent.clientWidth, parent.clientHeight);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = size;
      height = size;
      canvas.width = Math.floor(size * dpr);
      canvas.height = Math.floor(size * dpr);
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      targetRotY = px * 0.55;
      targetRotX = 0.22 + py * 0.35;
    };

    const onLeave = () => {
      targetRotY = 0;
      targetRotX = 0.22;
    };

    const draw = (time: number) => {
      if (!running) return;
      rotY += (targetRotY - rotY) * 0.04 + 0.0038;
      rotX += (targetRotX - rotX) * 0.04;

      const cx = width / 2;
      const cy = height / 2;
      const radius = width * 0.38;
      const pulse = 1 + Math.sin(time * 0.0016) * 0.015;

      ctx.clearRect(0, 0, width, height);

      // Soft outer atmosphere.
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 1.35);
      glow.addColorStop(0, "rgba(0, 112, 232, 0.22)");
      glow.addColorStop(0.45, "rgba(1, 168, 210, 0.12)");
      glow.addColorStop(1, "rgba(2, 40, 95, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      for (const point of points) {
        // Rotate around Y then X.
        const xz = point.x * cosY - point.z * sinY;
        const zz = point.x * sinY + point.z * cosY;
        const yz = point.y * cosX - zz * sinX;
        const z = point.y * sinX + zz * cosX;

        const depth = (z + 1.15) / 2.15;
        const px = cx + xz * radius * pulse;
        const py = cy + yz * radius * pulse;
        const size = 1.1 + depth * 2.1;

        // QNVO palette: navy → blue → cyan → teal by depth/tone.
        const alpha = 0.18 + depth * 0.72;
        let color = `rgba(127, 215, 234, ${alpha})`;
        if (point.tone < 0.25) color = `rgba(0, 112, 232, ${alpha})`;
        else if (point.tone < 0.5) color = `rgba(1, 168, 210, ${alpha})`;
        else if (point.tone < 0.75) color = `rgba(5, 213, 151, ${alpha * 0.9})`;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Latitude hints (subtle rings).
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      for (const band of [-0.45, 0, 0.45]) {
        ctx.beginPath();
        ctx.ellipse(cx, cy + band * radius * 0.55, radius * 0.92, radius * 0.28, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    frame = window.requestAnimationFrame(draw);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className={`logo-globe ${className}`.trim()} aria-hidden="true">
      <canvas ref={canvasRef} className="logo-globe-canvas" />
      <div className="logo-globe-core">
        <div className="logo-globe-plate">
          <OptimizedImage
            base="/logo/qnvo-logo-horizontal-transparent"
            alt=""
            width={320}
            height={116}
            sizes="(max-width: 700px) 200px, 260px"
            className="logo-globe-mark"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
