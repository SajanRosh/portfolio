import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import User from './assets/randy.jpg';
import { PiHandWavingThin } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Exp1 from "./assets/splunk.svg"
import Exp2 from './assets/buildspace.jpg'
import Exp3 from './assets/mhacks-9.png'
import { ConfettiButton } from "@/components/ui/confetti";
import BlurFade from "@/components/ui/blur-fade";
import { ChevronRight } from "lucide-react";
 
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

function App() {
  return (
    <>
    <BlurFade delay={0.5} inView>
      <section className='mt-12 max-w-2xl mx-auto'>
        <div className="z-10 flex items-center justify-center">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Introducing Magic UI
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        </div>
        <div className='flex items-center gap-4'>
          <div>
            <h1 className='text-4xl font-black flex gap-2 items-center'>Hey, I am Randy Orton! <span className='text-yellow-700 '><PiHandWavingThin/></span>
            </h1>
            <p className='mt-3 font-light'>
            I am a WWE legend, is known for his incredible athleticism, intense persona, and signature finishing move, the RKO, earning him global fame.</p>
            <div className="flex mt-4 gap-3">
              <a href="" className='text-xl '><FaTwitter/></a>
              <a href="" className='text-xl'><FaLinkedin/></a>
            </div>
          </div>
          <img src={User} className='h-40 w-40 rounded-full object-cover' alt="" />
        </div>
      </section>
      <section className='mt-8 max-w-2xl mx-auto'>
        <h1 className='font-2xl font-black'>About Me</h1>
        <p className='font-light text-neutral-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus cumque exercitationem praesentium, illo eligendi asperiores sunt unde culpa est nostrum vel adipisci quisquam, sed doloremque sequi similique distinctio et!</p>
      </section>
      <section className='mt-12 max-w-2xl mx-auto'>
        <h1 className='font-2xl font-black'>Work Experience</h1>
        <p className='font-light text-neutral-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={Exp1} className='h-12 w-12 rounded-full' alt="" />
              <div className="">
                <h2 className='text-sm'>Splunk Technologies</h2>
                <p className='text-xs'>Software Engineer</p>
              </div>
            </div>
            <p className='font-light text-neutral-500 text-sm'>May 2021 - Oct 2022</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={Exp2} className='h-12 w-12 rounded-full' alt="" />
              <div className="">
                <h2 className='text-sm'>Build Space</h2>
                <p className='text-xs'>Senior Software Engineer</p>
              </div>
            </div>
            <p className='font-light text-neutral-500 text-sm'>Oct 2022 - Oct 2023</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={Exp3} className='h-12 w-12 rounded-full' alt="" />
              <div className="">
                <h2 className='text-sm'>M Hacks 9</h2>
                <p className='text-xs'>Front End Developer</p>
              </div>
            </div>
            <p className='font-light text-neutral-500 text-sm'>Oc 2023 - Oct 2024</p>
          </div>
        </div>
      </section>
      <section className='mt-12 mb-36 max-w-2xl mx-auto'>
        <h1 className='text-2xl font-black'>Get in Touch</h1>
        <p className='font-light text-neutral-500'>Want to chat? Just shoot me a dm wwith a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.</p>
        <div className="relative mt-4">
          <ConfettiButton className=" rounded-full px-5 font-light">Text me on LinkedIn 🎉</ConfettiButton>
        </div>
      </section>
    </BlurFade>
    </>
  )
}

export default App
