import React from 'react'
import { Info } from './Info'
import Image from 'next/image'
import { ArrowDownToLine } from 'lucide-react'
import aboutImage from '../../assets/v2.jpg'

export const About = () => {
  return (
    <section className="section" id="about">
      <span className="kicker">
        <span className="font-mono">01</span> / About
      </span>
      <h2 className="head_title max-w-3xl">
        Engineer by training, <span className="italic text-brand">game-maker</span> at heart.
      </h2>

      <div className="mt-14 grid items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <div className="relative w-fit">
            <div
              className="absolute -bottom-3 -left-3 h-full w-full rounded-2xl border border-line"
              aria-hidden="true"
            />
            <Image
              src={aboutImage}
              width={420}
              height={420}
              alt="Vishal Jangid"
              className="relative w-full max-w-sm rounded-2xl border border-line object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="max-w-xl text-lg leading-relaxed text-inkSoft">
            Hi, I’m Vishal — a Unity Game Developer and full-stack engineer. I build
            playable games with complex mechanics and ship production web apps end to
            end. My core stack is <span className="text-ink">C#, Unity, React,</span> and{" "}
            <span className="text-ink">Node.js</span>, and I’ve published three
            peer-reviewed papers across VR and computer vision. Outside of code, I train
            kickboxing and am always up for a game of 8-ball pool.
          </p>

          <div className="mt-8">
            <Info />
          </div>

          <a
            href="/portfolio/Resume/Vishal_Jangid_Resume.pdf"
            download="Vishal_Jangid_Resume.pdf"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-brand"
          >
            Download CV <ArrowDownToLine size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
