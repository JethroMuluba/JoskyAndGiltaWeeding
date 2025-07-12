'use client'

import React from 'react'
import data from '@/data/data.json'
import { motion } from 'framer-motion'





const Guest = () => {
  const getCover = data.home?.[0]?.heroSection?.[0]?.cover  || "/placeholder.svg";

  return (
    <main className="min-h-screen bg-[#6f3d2c] flex flex-col md:items-center">

<motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="bg-no-repeat overflow-hidden items-center h-[926px] md:w-[428px] "
      style={{ backgroundImage: `url(${getCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
    </motion.section>
    </main>
  )
}

export default Guest