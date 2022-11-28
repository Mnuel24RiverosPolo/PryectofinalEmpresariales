import styles from './styles.module.css'
import { Swiper,SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";


const Banner = ()=>{
    SwiperCore.use([Autoplay]);

    return (
        <div className={styles.container}>
           <Swiper
           spaceBetween={0}
           slidesPerView={1}
           loop={true}
           autoplay={{
               delay:2000
           }}
           >
               <SwiperSlide>
                   <img src="https://oechsle.vteximg.com.br/arquivos/Slider-BF-televisores-nov-desktop-f.png" alt="slide1" />
               </SwiperSlide>
               <SwiperSlide>
                   <img src="https://oechsle.vteximg.com.br/arquivos/Slider-BF-calzado-nov-desktop-b.png" alt="slide2" />
               </SwiperSlide>
               <SwiperSlide>
                   <img src="https://oechsle.vteximg.com.br/arquivos/Slider-BF-laptops-nov-desktop-h.png" alt="slide3" />
               </SwiperSlide>
               <SwiperSlide>
                   <img src="https://oechsle.vteximg.com.br/arquivos/Slider-BF-celulares-nov-desktop-c.png" alt="slide4" />
               </SwiperSlide>
           </Swiper>
        </div>
    )
}

export default Banner;