import styled from "styled-components";
import {motion} from 'framer-motion'

export const Container = styled.div`
  display: flex;
  display: ${({ auth }) => (auth ? "block" : "none")};
  display: ${({ handlenavbar }) => (handlenavbar == 0 ? "block" : "none")};
`;

export const LeftContainer = styled(motion.div)`
  width: 324px;
  height: 100vh;
  background-color: #120f13;

  @media(max-width: 765px) {
    position: absolute;
    z-index: 99;
  }

  @media(max-width: 385px) {
    width: 250px;
  }
`

export const Channels = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1.5rem;
  box-shadow: 0px 2px 0px 0px #000;

  .left {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  #iconBack {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  p {
    color: white;
    font-weight: bold;
    font-size: 18px;
  }

  .boxPlus {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    width: 24px;
    height: 24px;
    background-color: #252329;
    color: white;
    cursor: pointer;
    border-radius: 6px;
  }
`;

export const OpenArrow = styled.div`
  display: none;
  display: ${({ openarrow }) => (openarrow == 1 ? "block" : "none")};
  transition: 0.3 ease;
  position: absolute;
  right: 10px;
  top: -150px;
  background-color: #252329;
  width: 192px;
  height: 173px;
  border-radius: 12px;

  .myProfile {
    display: flex;
    margin: 0 auto;
    margin-top: 15px;
    padding-inline: 1.5rem;
    gap: 15px;
    width: 120px;
    height: 39px;
    background-color: #3c393f;
    border-radius: 8px;
  }

  .contentMP {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    cursor: pointer;
    
  }

  a {
    color: #e0e0e0;
    text-decoration: none;
  }

  #iconUser {
    width: 20px;
    height: 20px;
  }

  .twitter {
    display: flex;
    align-items: center;
    margin-top: 15px;
    padding-inline: 1.5rem;
    gap: 15px;
    width: 120px;
    height: 39px;
    margin-bottom: 12px;
  }

  #iconTwitter {
    width: 20px;
    height: 20px;
  }

  .hr {
    width: 164px;
    border-bottom: 1px solid #e0e0e0;
    margin: 0 auto;
  }

  .logout {
    display: flex;
    align-items: center;
    padding-inline: 1.5rem;
    gap: 15px;
    cursor: pointer;
  }

  .pLogout {
    color: #eb5757;
  }
`;

export const NewChannelContainer = styled.div`
  display: ${({ opennewchannel }) => (opennewchannel == 1 ? "block" : "none")};
  z-index: 1;
`;

export const NewChannelWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media(max-width: 765px) {
    right: 120px;
  }

  @media(max-width: 600px) {
    right: -50px;
  }

  @media(max-width: 500px) {
    right: 20px;
  }

  @media(max-width: 440px) {
    right: -40px;
  }

  @media(max-width: 350px) {
    right: -120px;
  }

 
`;

export const Shadow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.5;

  @media(max-width: 765px) {
    display: none;
  }
`

export const RightContainer = styled.div`

`

// export const IconCloseMobile = styled.div`
//   position: absolute;
//   right: -40px;

//   #iconClose {
//     width: 15px;
//     height: 15px;
//   }

//   .containerIconClose {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     width: 28px;
//     height: 28px;
//     border-radius: 12px;
//     background-color: #120F13;
//   }

// `