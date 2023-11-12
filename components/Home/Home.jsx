import { Data } from './Data'
import ScrollDown from './ScrollDown'
import { Social } from './Social'
import Image from 'next/image'
import homeImage from '../../assets/v1.jpg'

export const Home = () => {
  return (
    <section className="container mx-auto  h-fit flex flex-col pt-24 items-center justify-self-center
    sm:pt-12" id="home">
      <div className=''>

        <div className="flex mb-10 flex-wrap sm:gap-y-4">
          <Social />


          <div className="animate-profileImage lg:order-last sm:order- ml-16">
            <Image src={homeImage} width={300} height={239} alt='Vishal Jangid'
              className='shadow-inner grayscale animate-profileImage hover:grayscale-0
                    sm:w-56 sm:h-30'/>

          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  )
}
