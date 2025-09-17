'use client'

import { useState, useEffect, useRef } from 'react'

interface UseCountUpOptions {
  end: number
  duration?: number
  start?: number
  delay?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  delay = 0,
  suffix = '',
  prefix = '',
  decimals = 0,
  resetOnScroll = false
}: UseCountUpOptions & { resetOnScroll?: boolean }) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (resetOnScroll) {
            setCount(start) // Reset count when scrolling past
          }
          setIsVisible(true)
        } else if (resetOnScroll) {
          setIsVisible(false) // Reset visibility state when out of view
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible, resetOnScroll, start])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      const startTime = Date.now()
      const startValue = start
      const endValue = end

      const updateCount = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Enhanced easing function for ultra-smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = startValue + (endValue - startValue) * easeOutQuart
        
        setCount(Number(currentValue.toFixed(decimals)))

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        }
      }

      requestAnimationFrame(updateCount)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, end, start, duration, delay, decimals])

  const formatCount = (value: number) => {
    return `${prefix}${value.toFixed(decimals)}${suffix}`
  }

  return {
    count: formatCount(count),
    ref,
    isVisible
  }
}
