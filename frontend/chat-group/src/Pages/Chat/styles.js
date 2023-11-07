import styled from "styled-components";

export const Container = styled.div`

  .roomName {
    position: absolute;
    display: flex;
    align-items: center;
    height: 60px;
    width: calc(100% - 324px);
    box-sizing: border-box;
    padding-inline: 5rem;
    background-color: #252329;
    box-shadow: 0px 2px 0px 0px #000;

    p {
      font-weight: 700;
      font-size: 18px;
      line-height: 24.52px;
      color: #e0e0e0;
    }
  }

  .messageContainer {
    position: absolute;
    bottom: 30px;
  }

  .messageWrapper {
    position: relative;
  }

  #iconSent {
    width: 40px;
    position: absolute;
    right: 10px;
    top: 8px;
    cursor: pointer;
  }

  #hamb {
    width: 24px;
    height: 24px;
    margin-right: 20px;
    cursor: pointer;
  }

  @media (max-width: 765px) {
    .roomName {
      padding-inline: 2rem;
      width: 100%;
    }
  }

  @media (min-width: 765px) {
    #hamb {
      display: none;
    }
  }
`;

export const IconCloseMobile = styled.div`
  display: ${({ handlemenu }) => (handlemenu == 1 ? "none" : "block")};
  position: absolute;
  left: 350px;
  z-index: 1;

  @media(max-width: 385px) {
    left: 260px;

  }

  #iconClose {
    width: 15px;
    height: 15px;
  }

  .containerIconClose {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 28px;
    height: 28px;
    border-radius: 12px;
    background-color: #120f13;
  }

  @media (min-width: 765px) {
    display: none;
  }




`;

export const ContainerChat = styled.div`
  position: absolute;
  top: 62px;
  width: calc(100% - 484px);
  height: calc(100% - 121px);
  padding-top: 59px;
  padding-inline: 5rem;
  background-color: #252329;

  input {
    width: 1100px;
    height: 52px;
    border-radius: 8px;
    background-color: #3c393f;
    padding-left: 15px;
    border: none;
    outline: none;
  }

  input::placeholder {
    color: #828282;
    font-size: 14px;
  }

  @media (max-width: 1755px) {
    input {
      width: 1000px;
    }
  }

  @media (max-width: 1455px) {
    input {
      width: 900px;
    }
  }

  @media (max-width: 1355px) {
    padding-inline: 4rem;
    width: calc(100% - 452px);

    input {
      width: 800px;
    }
  }

  @media (max-width: 1270px) {
    input {
      width: 700px;
    }
  }

  @media (max-width: 1165px) {
    input {
      width: 600px;
    }
  }

  @media (max-width: 1070px) {
    padding-inline: 3rem;
    width: calc(100% - 420px);

    input {
      width: 500px;
    }
  }

  @media (max-width: 960px) {
    padding-inline: 2rem;
    width: calc(100% - 388px);

    input {
      width: 380px;
    }
  }

  @media (max-width: 765px) {
    width: calc(100% - 64px);

    input {
    width: 600px;
  }
  }


  @media (max-width: 665px) {
    input {
      width: 500px;
    }
  }

  @media (max-width: 565px) {
    input {
      width: 400px;
    }

    @media (max-width: 465px) {
      input {
        width: 300px;
      }
    }
  }

  @media (max-width: 365px) {
    input {
      width: 200px;
    }
  }
`;

export const WrapperChat = styled.div`
  overflow-y: scroll;
  height: 700px;
`;

export const MessageList = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  #userPhoto {
    width: 35px;
    height: 35px;
    border-radius: 7px;
    margin-top: 8px;
  }

  .rightContentMessage {
  }

  .messageMeta {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .mAuthor {
    font-size: 18px;
    font-weight: 700;
    color: #828282;
  }

  .mTime {
    font-size: 14px;
    font-weight: 500;
    line-height: 19.07px;
    color: #828282;
  }

  .mText {
    color: white;
    white-space: pre-line;
    max-width: 1100px;
    word-wrap: break-word;
  }

  @media (max-width: 1755px) {
    .mText {
      width: 1000px;
    }
  }

  @media (max-width: 1655px) {
    .mText {
      width: 900px;
    }
  }

  @media (max-width: 1455px) {
    .mText {
      width: 800px;
    }
  }

  @media (max-width: 1355px) {
    .mText {
      width: 700px;
    }
  }

  @media (max-width: 1270px) {
    .mText {
      width: 600px;
    }
  }

  @media (max-width: 1165px) {
    .mText {
      width: 500px;
    }
  }

  @media (max-width: 1070px) {
    .mText {
      width: 400px;
    }
  }

  @media (max-width: 960px) {
    .mText {
      width: 300px;
    }
  }

  @media (max-width: 445px) {
    .mText {
      width: 200px;
      font-size: 14px;
    }

    .messageMeta {
      flex-direction: column;
      align-items: flex-start;
      gap: 3px;
    }
  }

  @media (max-width: 345px) {
    .mText {
      width: 150px;
      font-size: 13px;
    }

    .mTime {
      font-size: 11px;
    }
  }

`;

export const ActiveChat = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 300px;
  height: 90px;
  border: 1px solid white;
  border-radius: 12px;
  display: ${({ closewc }) => (closewc == 1 ? "none" : "block")};
  z-index: 999;

  .activeChatWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    color: white;
    background-color: #2f80ed;
    width: 60px;
    height: 30px;
    border-radius: 12px;
    font-weight: 700;
  }

  .wCMessage {
    color: white;
  }
`;

export const Shadow = styled.div`
  display: ${({ closewc }) => (closewc == 1 ? "none" : "block")};
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
  z-index: 998;
`;

export const RoomDesc = styled.div`
  display: ${({ handlenavbar }) => (handlenavbar == 0 ? "none" : "block")};
  position: absolute;
  left: -300px;
  top: 70px;
  z-index: 10;

  @media(max-width: 765px) {
    display: ${({ handlemenu }) => (handlemenu == 1 ? "none" : "block")};
    left: 30px;
  }
`;
