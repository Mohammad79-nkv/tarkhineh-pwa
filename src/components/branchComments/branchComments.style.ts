import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CommentContainer = styled.section``;

export const CommentsSwiper = styled(Swiper)`
  &::after {
    content: "";
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 42%,
      rgba(255, 255, 255, 0) 100%
    );
    display: block;
    width: 7vw;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .swiper-button-next {

    margin-left: 5vw;
  }
`;
