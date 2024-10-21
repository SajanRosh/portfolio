import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import User from './assets/photo.jpg';
import infosys from './assets/infosys_logo.jpg'
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
            Welcome
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        </div>
        <div className='flex items-center gap-4 mt-4'>
          <div>
            <h1 className='text-3xl font-black flex gap-2 items-center'>Hey, I am Sajan Rosh P V ! <span className='text-yellow-700 '><PiHandWavingThin/></span>
            </h1>
            <p className='mt-3 font-light'>
              I am an IT professional with 2.10 years of work experience, currently working as a Senior Systems Engineer at Infosys.
            </p>
            <div className="flex mt-4 gap-3">
              {/* <a href="" className='text-xl '><FaTwitter/></a> */}
              <a href="https://www.linkedin.com/in/sajan-rosh-p-v-a17b8119a/" target='_blank' className='text-2xl'><FaLinkedin/></a>
            </div>
          </div>
          <img src={User} className='h-40 w-40 rounded-full object-contain' alt="" />
        </div>
      </section>
      <section className='mt-8 max-w-2xl mx-auto'>
        <h1 className='font-2xl font-black'>About Me</h1>
        <p className='font-light text-neutral-500 mt-1'>Hello there! 👋 I am a seasoned Mechanical Engineer who has decided to embark on an exciting journey into the realm of Information Technology. Fueled by dissatisfaction with stagnant growth in my previous field, I’ve discovered a passion for coding.</p>
      </section>
      <section className='mt-12 max-w-2xl mx-auto'>
        <h1 className='font-2xl font-black'>Work Experience</h1>
        {/* <p className='font-light text-neutral-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={infosys} className='h-12 w-12 rounded-full' alt="" />
              <div className="">
                <h2 className='text-sm'>Infosys</h2>
                <p className='text-xs'>Senior System Engineer</p>
              </div>
            </div>
            <div className=''>
              <p className='font-light text-neutral-500 text-sm'>Jan 2022 - Oct 2024</p>
              <p className='font-light text-neutral-500 text-sm'>Currently working</p>
            </div>
          </div>
        </div>
        {/* <div className="mt-6">
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
        </div> */}
      </section>
      <section className='mt-12 max-w-2xl mx-auto'>
        <h1 className='font-2xl font-black'>Achievements</h1>
        <ul className='px-5'>
          <li className='text-sm mt-1 list-disc'>Worked extensively with MSSQL Server databases,Javascript,dot net</li>
          <li className='text-sm mt-1 list-disc'>Collaborated with team members to complete the tasks</li>
          <li className='text-sm mt-1 list-disc'>Learned new technologies like Tailwind-CSS, React and created projects</li>
          <li className='text-sm mt-1 list-disc'>Rise Award - Most Valuable persion in the team</li>
          <li className='text-sm mt-1 list-disc'>Our Team got an excellence of performance award</li>
        </ul>
      </section>
      <section className='mt-12 max-w-2xl mx-auto'>
        <h1 className='font-2xl font-black'>Personal Projects</h1>
        {/* <p>Costco Wholesale Corporation is an American multinational corporation which operates a chain of membership-only big-box warehouse club retail stores</p> */}
        <div>
          <div className="flex justify-between items-center mt-2">
            <div className="">
              <h1 className='text-sm mt-1 font-semibold'>Netflix Clone</h1>
              <p className='text-xs mt-1 font-light'>HTML,CSS </p>
            </div>
            <a href="https://netflix-zeta-snowy.vercel.app/" className='text-red-400 cursor-pointer text-sm'>Netflix</a>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="">
              <h1 className='text-sm mt-1 font-semibold'>BMI Calculator</h1>
              <p className='text-xs mt-1 font-light'>HTML,CSS,Javascript</p>
            </div>
            <a href="https://bmi-calculator-alpha-pearl.vercel.app/" className='text-red-400 cursor-pointer text-sm'>BMI</a>
          </div>
          <div className="flex justify-between items-center mt-2">
            
            <div className="">
              <h1 className='text-sm mt-1 font-semibold'>User Management</h1>
              <p className='text-xs mt-1 font-light'>HTML,Tailwind-CSS,Javascript</p>
            </div>
            <a href="https://user-management-coral-three.vercel.app/" className='text-red-400 cursor-pointer text-sm'>User</a>
          </div>
          <div className="flex justify-between items-center mt-2">     
            <div className="">
              <h1 className='text-sm mt-1 font-semibold'>airbnb clone</h1>
              <p className='text-xs mt-1 font-light'>HTML,Tailwind-CSS,Javascript</p>
            </div>
            <a href="https://airbnb-beige-two.vercel.app/" className='text-red-400 cursor-pointer text-sm'>airbnb</a>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div>
              <h1 className='text-sm mt-1 font-semibold'>Movie App</h1>
              <p className='text-xs mt-1 font-light'>HTML,Tailwind-CSS,Javascript,API</p>
            </div> 
            <a href="https://movie-app-beta-flame.vercel.app/" className='text-red-400 cursor-pointer text-sm'>Movie App</a>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div>
              <h1 className='text-sm mt-1 font-semibold'>ToDo App</h1>
              <p className='text-xs mt-1 font-light'>HTML,Tailwind-CSS,Javascript</p>
            </div> 
            <a href="https://to-do-app-six-sigma-63.vercel.app/" className='text-red-400 cursor-pointer text-sm'>ToDo</a>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div>
              <h1 className='text-sm mt-1 font-semibold'>React-Netflix</h1>
              <p className='text-xs mt-1 font-light'>HTML,Tailwind-CSS,Javascript,React</p>
            </div> 
            <a href="https://netflix-react-gilt.vercel.app/" className='text-red-400 cursor-pointer text-sm'>Netflix</a>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div>
              <h1 className='text-sm mt-1 font-semibold'>React-Instagram</h1>
              <p className='text-xs mt-1 font-light'>HTML,Tailwind-CSS,Javascript,React</p>
            </div> 
            <a href="https://instagram-react-smoky-one.vercel.app/" className='text-red-400 cursor-pointer text-sm'>Instagram</a>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div>
              <h1 className='text-sm mt-1 font-semibold'>React-Movie App</h1>
              <p className='text-xs mt-1 font-light'>HTML,Tailwind-CSS,Javascript,React</p>
            </div> 
            <a href="https://vercel.com/sajan-roshs-projects/react-movie-app" className='text-red-400 cursor-pointer text-sm'>Movie App</a>
          </div>
        </div>
      </section>
      <section className='mt-12 mb-36 max-w-2xl mx-auto'>
        <h1 className='text-2xl font-black'>Get in Touch</h1>
        <p className='font-light text-neutral-500'>Want to chat? Just shoot me a dm wwith a direct question on LinkedIn and I'll respond whenever I can. I will ignore all soliciting.</p>
        <div className="relative mt-4">
          <a href="https://www.linkedin.com/in/sajan-rosh-p-v-a17b8119a/" target='_blank'><ConfettiButton className=" rounded-full px-5 font-light">Text me on LinkedIn 🎉</ConfettiButton></a>
        </div>
      </section>
    </BlurFade>
    </>
  )
}

export default App
