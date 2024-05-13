import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animation';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    // gsap.from('#chip', {
    //   scrollTrigger: {
    //     trigger: '#chip',
    //     start: '20% bottom'
    //   },
    //   opacity: 0,
    //   scale: 4,
    //   duration: 2,
    //   ease: 'power2.inOut'
    // })

    animateWithGsap('#chip' , {
      opacity: 1,
      scale: 0.5,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      // duration: 1,
      ease: 'power2.inOut',
      stagger : 2.5
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20 opacity-0">
          <img src={chipImg} alt="chip" width={1280} height={1280} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
          statement of style
            <br /> A monster win for roads.
          </h2>

          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay loop ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Shotgun: Built Different</p>
          </div>
          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                  Embark on a journey of innovation with our advanced ABS technology. {' '}
                    <span className="text-white">
                    From conquering urban landscapes
                    </span>.
                  </p>

                  <p className="hiw-text g_fadeIn">
                   Bullet : {' '}
                    <span className="text-white">
                    elevate your riding experience
                    </span>,
                    with safety that never takes a back seat.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">New</p>
                <p className="hiw-bigtext">Hunter X Huemn</p>
                <p className="hiw-text">with 350cc Engine</p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks