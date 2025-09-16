"use client"

import { useEffect, useRef } from "react"

export function BackgroundBeams() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    let animationFrameId = 0
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    const beams = Array.from({ length: 6 }).map((_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      angle: Math.random() * Math.PI * 2,
      speed: 0.2 + Math.random() * 0.4,
      width: 200 + Math.random() * 200,
      hue: 210 + i * 2,
      alpha: 0.05 + Math.random() * 0.08,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = "lighter"

      for (const b of beams) {
        b.x += Math.cos(b.angle) * b.speed
        b.y += Math.sin(b.angle) * b.speed

        if (b.x < -b.width) b.x = width + b.width
        if (b.x > width + b.width) b.x = -b.width
        if (b.y < -b.width) b.y = height + b.width
        if (b.y > height + b.width) b.y = -b.width

        const grad = ctx.createLinearGradient(b.x - b.width, b.y - b.width, b.x + b.width, b.y + b.width)
        grad.addColorStop(0, `hsla(${b.hue}, 80%, 60%, 0)`)
        grad.addColorStop(0.5, `hsla(${b.hue}, 90%, 60%, ${b.alpha})`)
        grad.addColorStop(1, `hsla(${b.hue}, 80%, 60%, 0)`)

        ctx.fillStyle = grad
        ctx.fillRect(b.x - b.width, b.y - 2, b.width * 2, 4)
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/70" />
    </div>
  )
}
