import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="md:w-full md:h-full w-24/12 h-80">
          <img 
          src='/assets/images/shotgun.avif'
          alt='shotgun'
          />
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 md:mt-0 mt-[-99px]"
      >
        <a href="#highlights" className="btn font-medium">Ride</a>
        <p className="font-medium text-xl">From ₹19k/month or ₹189k</p>
      </div>
    </section>
  )
}

export default Hero