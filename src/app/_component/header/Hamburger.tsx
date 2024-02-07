'use client'
import { motion, MotionConfig } from 'framer-motion'

interface HamburgerProps {
  handleMenuOpen: () => void
  isOpen: boolean
}

function Hamburger({ handleMenuOpen, isOpen }: HamburgerProps) {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        onClick={handleMenuOpen}
        className="relative h-20 w-20 rounded-full bg-transparent transition-colors hover:bg-primary-color"
        animate={isOpen ? 'open' : 'closed'}
        initial={false}
      >
        <motion.span
          className="absolute h-1 w-10 bg-black"
          style={{
            top: '35%',
            left: '50%',
            x: '-50%',
            y: '-50%',
          }}
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              top: ['35%', '50%', '50%'],
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              top: ['50%', '50%', '35%'],
            },
          }}
        />
        <motion.span
          className="absolute h-1 w-10 bg-black"
          style={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
          }}
          variants={{
            open: {
              rotate: ['0deg', '0deg', '-45deg'],
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg'],
            },
          }}
        />
        <motion.span
          className="absolute h-1 w-5 bg-black"
          style={{
            bottom: '35%',
            left: 'calc(50% + 10px)',
            x: '-50%',
            y: '50%',
          }}
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              left: '50%',
              bottom: ['35%', '50%', '50%'],
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              left: 'calc(50% + 10px)',
              bottom: ['50%', '50%', '35%'],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  )
}

export default Hamburger
