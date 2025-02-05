import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight as ArrowRight, FaArrowLeft as ArrowLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide1 from "/public/img/slide1.jpg"
import slide2 from "/public/img/slide2.jpg"
import slide3 from "/public/img/slide3.jpg"

const images = [
    slide1,
    slide2,
    slide3,
];

export const Carousel = () => {
    return (
        <div className="carousel">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                loop={true}
                className="swiper-container"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt={`Slide ${index}`} className="carousel-img" />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <ArrowLeft className="swiper-button-prev carousel-arrow left" />
            <ArrowRight className="swiper-button-next carousel-arrow right" />
        </div>
    );
};
