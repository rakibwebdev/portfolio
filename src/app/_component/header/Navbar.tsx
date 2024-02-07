'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Hamburger from './Hamburger'
import Image from 'next/image'

const menuItems = [
  {
    title: 'Home',
    url: '#home',
  },
  {
    title: 'Portfolio',
    url: '#portfolio',
  },
  {
    title: 'Skills',
    url: '#skills',
  },
  {
    title: 'Timeline',
    url: '#timeline',
  },
  {
    title: 'Price',
    url: '#price',
  },
  {
    title: 'News',
    url: '#news',
  },
  {
    title: 'Contact',
    url: '#contact',
  },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuOpen = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <header className="container mx-auto">
      <div className="flex justify-between items-center pt-5">
        <div className="logo">
          <a href="#home">
            <Image
              src="/logo.svg"
              alt="Md Rakib Hossain"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="flex gap-10 items-center">
          {isOpen && (
            <nav>
              <motion.ul
                className="list-none flex gap-5"
                initial="hidden"
                animate="visible"
              >
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: {
                        x: -10,
                        opacity: 0,
                      },
                      visible: {
                        x: 0,
                        opacity: 1,
                      },
                    }}
                  >
                    <a
                      href={item.url}
                      className="text-black hover:text-primary-color transition-all duration-300 font-title text-[20px] font-medium"
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          )}

          <Hamburger handleMenuOpen={handleMenuOpen} isOpen={isOpen} />
        </div>
      </div>
    </header>
  )
}
export default Navbar
