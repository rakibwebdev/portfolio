'use client'
import Image from 'next/image'
import React from 'react'
import Counter from './Counter'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="container mx-auto pt-20 pb-[100px]">
      <div className="wrapper columns-2">
        <div className="information pt-10">
          <h1 className="text-primary-color text-[20px] font-title font-medium mb-[16px]">
            Md Rakib Hossain
          </h1>
          <p className="uppercase font-extrabold font-title text-[45px]">
            Software Engineer based in Bangladesh
          </p>
          <p className="font-title font-medium text-[22px] mt-[16px] mb-[36px]">
            I'm a software engineer based in Bangladesh specializing in building
            (and occasionally designing) exceptional, high-quality websites and
            applications.
          </p>
          <div className="flex gap-10">
            <div className="flex gap-2 items-center">
              <Counter value={10} character={false} />
              <p className="font-title text-[14px] text-black opacity-[0.5]">
                Years of <br />
                Experience
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Counter value={100} character={true} />
              <p className="font-title text-[14px] text-black opacity-[0.5]">
                Full Stack
                <br />
                Project
              </p>
            </div>
          </div>
        </div>
        <div className="hero-image relative flex justify-end items-center">
          <motion.div
            animate={{ rotate: '10deg' }}
            transition={{ duration: 1 }}
            className="rounded-[10px] w-[300px] h-[450px] z-20"
          >
            <Image
              src="/1.jpg"
              alt="Md Rakib Hossain"
              width={300}
              height={450}
              className="rounded-[10px] w-[300px] h-[450px] z-20"
            />
          </motion.div>

          <motion.div
            animate={{ rotate: '-10deg' }}
            transition={{ duration: 1 }}
            className="shape absolute w-[300px] h-[450px] bg-primary-color top-[23px] bottom-[23px] right-[95px] rounded-[10px] z-[-1]"
          ></motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
