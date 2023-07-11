import { styled } from "styled-components";
import { Swiper } from "swiper/react";

interface IProps {
  withBg?: boolean;
}

export const FoodSwiper = styled(Swiper)<IProps>`
  &::after {
    content: "";
    background: ${(props) =>
      props.withBg
        ? "linear-gradient(90deg, rgba(65,127,86,1) 0%, rgba(255,255,255,0) 100%)"
        : "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"};
    display: block;
    width: 7vw;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .swiper-wrapper {
    @media (min-width: 768px) {
      margin-right: 7vw;
    }
  }
  .swiper-button-next {
    margin-left: 5vw;
  }
`;
