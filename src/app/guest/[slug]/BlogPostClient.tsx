'use client'

import React from 'react'
import { motion, useInView} from 'framer-motion'
import Image from "next/image"
import { Download } from "lucide-react"
import Link from "next/link"
import { useRef } from 'react'




interface BlogPost {
  id: string;
  guestName: string;
  guestQRCode: string;
  guestCard: string;
  guestTable: string;

}


interface BlogPostClientProps {
  post: BlogPost;
  getTemplate01: string;
  getTemplate02: string;
}

const BlogPostClient = ({ post, getTemplate01, getTemplate02,  }: BlogPostClientProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-[#6f3d2c] flex flex-col">
      <motion.section 
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ 
                                type: "spring",
                                stiffness: 960,
                                damping: 80,
                                duration: 1, 
                                ease: [0, 0.71, 0.2, 1.01],
                                delay: 1
                            }}
      className="bg-no-repeat overflow-hidden flex justify-between items-center h-[926px]   "
      style={{ backgroundImage: `url(${getTemplate01})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
    </motion.section>

    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="bg-no-repeat overflow-hidden  h-[926px]  px-8 "
      style={{ backgroundImage: `url(${getTemplate02})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div ref={ref} className=' text-white text-center flex flex-col justify-center items-center  pt-16'>
        <motion.h2 
                                  initial={{ x: 100, opacity: 0 }}
                                  animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                                  transition={{ duration: 1, ease: "easeOut" }}
        className='text-2xl mb-17'>
            {post.guestName}
        </motion.h2>

        <div className='flex flex-col justify-center items-center text-[16px]'>
          <motion.p className='mb-7'>
            C&apos;est avec beaucoup d&apos;émotions que Josky et Gilta vous convient à leur soirée dansante
          </motion.p>

          <motion.p className='mb-7'>
            Le vendredi 08 août 2025 à 19h00. 
          </motion.p>


          <div className='flex flex-col justify-center items-center'>
            <motion.p className='mb-4'>
              L&apos;événement aura lieu dans la magnifique Salle de fête Stina sise 45 dans la commune de Kasa-Vubu.
            </motion.p>

            <motion.p className='mb-7'>
              Réf. Croisement des avenues Gambela et Popokabaka.
            </motion.p>
          </div>

          <motion.p className='mb-7'>
            Pour plus d’infos contactez :
          </motion.p>

          <motion.p className='mb-7'>
          +243 997 103 857 | +243 824 208 889
          </motion.p>

          <motion.p className='mb-7'>
            Cordiale Bienvenue 🌸
          </motion.p>

          <motion.p className='mb-23'>
            Table : {post.guestTable}
          </motion.p>

        </div>

        <div className='flex flex-col gap-2 items-center'>
          <Image
                  src={post.guestQRCode || '/placeholder.svg?height=767&width=748'}
                  alt="Enywork en Formation du Personnel"
                  width={448}
                  height={448}
                  className="w-25 h-25 object-cover rounded-lg transition-transform duration-600 hover:scale-110"
                />

          <Link href={post.guestCard} target='blank' download className="bg-[#c49344] hover:bg-[#9e793c] px-6 py-2 rounded-lg font-normal text-white cursor-pointer flex items-center gap-2 mb-10">
                <span className='text-xs'>TELECHARGEZ ICI</span>
                <Download  className="w-5 h-5 animate-bounce" />
          </Link>
        </div>



      </div>
    </motion.section>

    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className=" bg-no-repeat overflow-hidden flex justify-between items-center  h-[926px] px-4 pt-20 pb-4 "
      style={{ backgroundImage: `url(${getTemplate02})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className=' text-white text-center flex flex-col justify-center'>

        <p className='py-  px-8  text-[14px]'>
        Aujourd&apos;hui, nous unissons nos cœurs pour la vie, et c&apos;est avec émotion que vous assistez à la naissance d&apos;un nouveau chapitre plein d&apos;amour, de complicité et de promesses.
        </p>

        <h1 className='text-[#c49344] text-[100px]'>
          B de B
        </h1>

        <p className='py-  px-8  text-[10px]'>
            Powered By Jethro Code/Polytech Services
        </p>
        <p className='py-  px-8  text-[10px]'>
            0827 964 420
        </p>

      </div>
    </motion.section>

    </main>
  )
}

export default BlogPostClient 