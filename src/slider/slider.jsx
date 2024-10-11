import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import SwiperCore, { Navigation } from "swiper";
import { Image } from "/src/elements";
import { StyledSider, StyledButton, SlyderWrapper } from "./styled";

function Slider({ images }) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <SlyderWrapper>
      <StyledButton left ref={navigationPrevRef} title="Назад">
        &lt;
      </StyledButton>
      <StyledButton right ref={navigationNextRef} title="Вперёд">
        &gt;
      </StyledButton>
      <StyledSider
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        freeMode
        watchSlidesProgress
        slidesPerView={1}
        spaceBetween={20}
        loop
      >
        {images &&
          images.length &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt="изображение продукта"
                width="200"
                height="257"
                maxWidth="200"
              />
            </SwiperSlide>
          ))}
      </StyledSider>
    </SlyderWrapper>
  );
}

export default Slider;
