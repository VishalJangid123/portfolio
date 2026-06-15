import { Data } from './Data'
import ScrollDown from './ScrollDown'
import Image from 'next/image'
import homeImage from '../../assets/v1.jpg'

export const Home = () => {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center px-6 pb-12 pt-28 md:px-10 md:pt-32"
    >
      <div className="grid items-center gap-y-14 md:grid-cols-12 md:gap-x-10">
        <div className="md:col-span-7">
          <Data />
        </div>

        <div className="md:col-span-5">
          <div
            className="animate-fade-up relative mx-auto w-fit"
            style={{ animationDelay: "520ms" }}
          >
            {/* offset accent frame */}
            <div
              className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-brand"
              aria-hidden="true"
            />
            <Image
              src={homeImage}
              width={360}
              height={440}
              alt="Vishal Jangid"
              priority
              className="relative h-auto w-[280px] rounded-2xl border border-line object-cover grayscale transition-all duration-700 hover:grayscale-0 md:w-[340px]"
            />
            <span className="absolute -bottom-3 left-6 rounded-full bg-ink px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper">
              Bangkok · TH
            </span>
          </div>
        </div>
      </div>

      <div className="mt-14 hidden md:block">
        <ScrollDown />
      </div>
    </section>
  )
}
