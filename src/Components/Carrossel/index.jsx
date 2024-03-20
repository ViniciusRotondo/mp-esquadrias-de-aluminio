import { register } from "swiper/element/bundle";
import 'swiper/css';
import './carousel.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.jpg'
import Img3 from '../../assets/img3.jpg'
import Img4 from '../../assets/img4.png'
import Img5 from '../../assets/img5.jpg'
import { useState, useEffect } from "react";

register();

const Carrossel = () => {
    const [slidePerView, setSlidePerView] = useState(2)
    const data = [
        { id: 1, image: Img1 },
        { id: 2, image: Img2 },
        { id: 3, image: Img3 },
        { id: 4, image: Img4 },
        { id: 5, image: Img5 }
    ]

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 720){
                setSlidePerView(1);
            }else{
                setSlidePerView(2);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return(
        <>
            <div className='slide-container'>
                <swiper-container
                    slides-per-view={slidePerView}
                    speed="500" loop="true" 
                    pagination={{ clickable: true }} 
                    navigation
                    scrollbar
                >
                        {data.map((item) => (
                            <swiper-slide key={item.id}>
                                <img src={item.image} alt="Slider" className="slide-item" />
                            </swiper-slide>
                        ))}
                </swiper-container>
            </div>
        </>
    )
}

export default Carrossel