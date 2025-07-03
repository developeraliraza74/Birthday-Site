"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Heart, Sparkles, Gift, Cake } from "lucide-react"
import Image from "next/image"

export default function BirthdayCelebration() {
  const [isCardOpen, setIsCardOpen] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
        className="relative mb-2"
      >
        <div className="flex items-center justify-center gap-4 mb-2">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-pink-600">Happy Birthday Princess!</h1>

        </div>
        <div className="flex justify-center gap-3">
          <Cake className="w-8 h-8 text-pink-500" />
          <Sparkles className="w-8 h-8 text-yellow-500" />
          <Heart className="w-8 h-8 text-pink-500" />
        </div>
        <div className="flex justify-center gap-2 flex-col items-center sm:text-center">

          <div className="flex justify-center gap-2 flex-row items-center sm:text-center flex-wrap ">
            <h3 className="text-2xl sm:text-2xl font-bold text-left text-pink-600 mt-2">To a Person I can't Even Meet! <br />  <span className="text-left sm:text-center"><span className="text-blue-300">Zidi</span> <br /> <span className="text-red-900 ps-7">Moody 🙄</span> <br /> <span className="text-red-900 ps-7">Foody 🍔😊</span> <br /> <span className="text-green-700 ps-7">Caring</span> <br /><span className="text-orange-700 ps-7">Brave</span></span></h3>
            <Image
              src="/image.png"
              alt="Birthday"
              width={150}
              height={150}
              className="rounded-full shadow-md object-cover"
              priority
            />
          </div>
        </div>

      </motion.div>

      <motion.div
        className="w-full max-w-md mx-auto my-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div
          className={`relative cursor-pointer transition-all duration-700 ease-in-out transform ${isCardOpen ? "rotate-0" : "rotate-2"
            }`}
          onClick={() => setIsCardOpen(!isCardOpen)}
        >
          <div
            className={`bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-14 sm:p-10 shadow-lg transition-all duration-700 transform ${isCardOpen ? "scale-95" : "scale-100"
              }`}
          >
            <div className="absolute top-2 right-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-yellow-200" />
              </motion.div>
            </div>

            <div className="text-center text-white">
              <p className="text-lg font-medium mb-4">Tap to {isCardOpen ? "close" : "open"} your card</p>
              <div className="flex justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Gift className="w-14 h-14 text-white" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Card content */}
          <AnimatePresence>
            {isCardOpen && <motion.div
              className="absolute inset-0 bg-white max-[350px]:-top-6 max-[350px]:min-h-[275px] rounded-3xl p-4 shadow-xl shadow-rose-100 flex flex-col items-center justify-center"
              initial={{ rotate: 2, rotateX: -90, opacity: 0 }}
              animate={{
                rotate: isCardOpen ? 0 : 2,
                rotateX: isCardOpen ? 0 : -90,
                opacity: isCardOpen ? 1 : 0,
                zIndex: isCardOpen ? 10 : -1,
              }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <p className="text-purple-700 mb-2">
                  Just wanted to remind you—you're an amazing girl. My days are better, smiles are wider, and life is sweeter because of you. Your messsages make Happy 😊😇.
                </p>
                <p className="text-pink-600 font-medium">I wish your birthday is full of love, magic, and everything that makes you smile 💖</p>
                <div className="flex justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Heart className="w-8 h-8 stroke-none fill-rose-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-md mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-center">
          <p className="text-lg text-purple-700 mb-4">
            May every wish you make today come true. You deserve the world, and I'll always be here to remind you of that.
          </p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-pink-600 font-medium">Let's always stay like this... together, forever 🫶</p>
             <a
              href="https://ig.me/m/developeraliraza"
              target="_blank"
              rel="noopener noreferrer"
            // You can add some style to make it look nice!
             style={{
              color: '#E1306C', // A nice Instagram-like color
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '18px'
             }}
          >
      Let's Thanks
    </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
