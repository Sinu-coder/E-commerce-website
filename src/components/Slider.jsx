import React from 'react'
import logo1 from "../assets/images/client.logo1.png"
import logo2 from "../assets/images/client.logo2.png"
import logo3 from "../assets/images/client.logo3.png"
import logo4 from "../assets/images/client.logo4.png"
import logo5 from "../assets/images/client.logo5.png"
import logo6 from "../assets/images/client.logo6.png"
import logo7 from "../assets/images/client.logo7.png"
import logo8 from "../assets/images/client.logo8.png"
import "../assets/css/Slider.css";
import { Swiper,SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import "swiper/css"


function Slider() {
  return (
    <section className="client-logo">
        <div className="auto-conatiner">
            <div className="text-center logo-h">
                <h2 className="logo-h-h2">Trusted by <span className="logo-span">100+</span>Companies</h2>
            </div>
            <div className="slider">
                <Swiper className="slide-track"
                 modules={[Autoplay]}
                 slidesPerView={4}
                 spaceBetween={10}
                 loop={true}
                 speed={2000}
                 autoplay={{delay:0,
                    disableOnInteraction:false,
                 }}
                 freeMode={true}
                 freeModeMomentum={false}
                 >
                   


                    <SwiperSlide className="slide">
                        <img src={logo1} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo2} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo3} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo4} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo5} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo6} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo7} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo8} className="img-fluid" alt=""/>
                    </SwiperSlide>
                   


                    <SwiperSlide className="slide">
                        <img src={logo1} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo2} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo3} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo4} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo5} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo6} className="img-fluid" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo7} className="img-fluid" alt="/"/>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={logo8} className="img-fluid" alt=""/>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Slider
