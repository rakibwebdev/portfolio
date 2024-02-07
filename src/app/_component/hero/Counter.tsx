'use client'

import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

type propsType = {
  value: number
  character: boolean
}

function Counter({ value, character }: propsType) {
  const counterRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(counterRef, { once: true })

  useEffect(() => {
    if (isInView) {
      const counter = counterRef.current
      let counterValue = 0
      const interval = setInterval(
        () => {
          if (counterValue < value) {
            counterValue++
            counter!.textContent = counterValue.toString()
          } else {
            clearInterval(interval)
          }
        },
        value < 100 ? 100 : 1,
      )
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <h1 className="uppercase font-semibold font-title text-[45px]">
      <span ref={counterRef} />
      {character ? 'K+' : '+'}
    </h1>
  )
}

export default Counter
