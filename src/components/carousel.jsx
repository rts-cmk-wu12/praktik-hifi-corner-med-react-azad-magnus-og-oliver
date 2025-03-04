import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight as ArrowRight, FaArrowLeft as ArrowLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slide1 from "/img/slide1.jpg"
import slide2 from "/img/slide2.jpg"
import slide3 from "/img/slide3.jpg"

const images = [
    slide1,
    slide2,
    slide3,
];

const easter_egg = [
    "aHR0cHM6Ly9pLmltZ3VyLmNvbS8yenhxWnhWLnBuZw==",
]

export const Carousel = () => {

    // if mouse is clicking 10 times within 10 seconds show easter egg
    let click = 0;

    const handleClick = (e) => {
        if (click >= 10) {
            e.target.src = atob(easter_egg[0])
            click = 0
        }
        setTimeout(() => {click = 0}, 5000)
        click++
    };




    return (
        <div className="carousel">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                className="swiper-container"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img onClick={handleClick} src={src} alt={`Slide ${index}`} className="carousel-img" />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <ArrowLeft className="swiper-button-prev carousel-arrow left" />
            <ArrowRight className="swiper-button-next carousel-arrow right" />
        </div>
    );
};
