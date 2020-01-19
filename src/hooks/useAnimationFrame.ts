import { useEffect, useRef, useState } from 'react'

export function useAnimationFrame() {
  const raf = useRef<number | null>(null)
  const [timestamp, setTimestamp] = useState(0)

  const onAnimationFrame: FrameRequestCallback = ts => {
    raf.current = requestAnimationFrame(onAnimationFrame)
    setTimestamp(ts)
  }

  function clearCurrentLoop() {
    raf.current && cancelAnimationFrame(raf.current)
  }

  useEffect(() => clearCurrentLoop, [])

  useEffect(() => {
    clearCurrentLoop()
    raf.current = requestAnimationFrame(onAnimationFrame)
    return clearCurrentLoop
  }, [timestamp])

  return [timestamp]
}
