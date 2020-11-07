import { css } from 'styled-components';

export default css`
  #nprogress {
    pointer-events: none;

    .bar {
      background: #2299dd;
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
    }

    .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #2299dd, 0 0 5px #2299dd;
      opacity: 1;
      transform: rotate(3deg) translate(0px, -4px);
    }
  }
`;