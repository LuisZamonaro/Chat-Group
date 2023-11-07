import styled from "styled-components";
import {motion} from 'framer-motion'

export const Container = styled(motion.div)`
  display: ${({ auth }) => (auth ? "block" : "none")};
  display: ${({ handlenavbar }) => (handlenavbar == 1 ? "block" : "none")};
  width: 324px;
  height: 100vh;
  background-color: red;
  background-color: #120f13;

  @media(max-width: 765px) {
    position: absolute;
    z-index: 1;
  }

  @media(max-width: 385px) {
    width: 250px;

  }

  .channelMembers {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-inline: 1.5rem;
    box-shadow: 0px 2px 0px 0px #000;
    padding-block: 1em;
    color: white;
    font-weight: bold;
    font-size: 18px;
  }

  .members {
    color: white;
    font-weight: bold;
    font-size: 18px;
    padding-inline: 1.5rem;
    padding-block: 1em;
    margin-top: 300px;
  }

  #iconBack {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;


