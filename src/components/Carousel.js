import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles/Carousel.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function Carousel() {
  const slides = [];

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide className="swiper-container" key={`slide-$(i)`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/900/600.webp`}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }
  return (
    <>
      <Swiper
        tag="section"
        wrapperTag="ul"
        id="main"
        pagination
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={60}
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
      >
        {slides}
      </Swiper>
    </>
  );
}

export default Carousel;
