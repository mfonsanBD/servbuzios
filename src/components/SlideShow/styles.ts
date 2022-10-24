import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

export const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: no-repeat 50% 50%;
  background-size: cover;
  -webkit-animation-name: kenburns;
  animation-name: kenburns;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-duration: 16s;
  animation-duration: 16s;
  opacity: 1;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);

  &:nth-child(1) {
    background-image: url('/img/background-01.jpg');
    -webkit-animation-name: kenburns-1;
    animation-name: kenburns-1;
    z-index: 3;
  }

  &:nth-child(2) {
    background-image: url('/img/background-02.jpg');
    -webkit-animation-name: kenburns-2;
    animation-name: kenburns-2;
    z-index: 2;
  }

  &:nth-child(3) {
    background-image: url('/img/background-03.jpg');
    -webkit-animation-name: kenburns-3;
    animation-name: kenburns-3;
    z-index: 1;
  }

  &:nth-child(4) {
    background-image: url('/img/background-04.jpg');
    -webkit-animation-name: kenburns-4;
    animation-name: kenburns-4;
    z-index: 0;
  }

  @-webkit-keyframes kenburns-1 {
    0% {
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    1.5625% {
      opacity: 1;
    }

    23.4375% {
      opacity: 1;
    }

    26.5625% {
      opacity: 0;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    98.4375% {
      opacity: 0;
      -webkit-transform: scale(1.21176);
      transform: scale(1.21176);
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes kenburns-1 {
    0% {
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    1.5625% {
      opacity: 1;
    }

    23.4375% {
      opacity: 1;
    }

    26.5625% {
      opacity: 0;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    98.4375% {
      opacity: 0;
      -webkit-transform: scale(1.21176);
      transform: scale(1.21176);
    }

    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes kenburns-2 {
    23.4375% {
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    26.5625% {
      opacity: 1;
    }

    48.4375% {
      opacity: 1;
    }

    51.5625% {
      opacity: 0;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  @keyframes kenburns-2 {
    23.4375% {
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    26.5625% {
      opacity: 1;
    }

    48.4375% {
      opacity: 1;
    }

    51.5625% {
      opacity: 0;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  @-webkit-keyframes kenburns-3 {
    48.4375% {
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    51.5625% {
      opacity: 1;
    }

    73.4375% {
      opacity: 1;
    }

    76.5625% {
      opacity: 0;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  @keyframes kenburns-3 {
    48.4375% {
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    51.5625% {
      opacity: 1;
    }

    73.4375% {
      opacity: 1;
    }

    76.5625% {
      opacity: 0;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  @-webkit-keyframes kenburns-4 {
    73.4375% {
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    76.5625% {
      opacity: 1;
    }

    98.4375% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes kenburns-4 {
    73.4375% {
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    76.5625% {
      opacity: 1;
    }

    98.4375% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`
