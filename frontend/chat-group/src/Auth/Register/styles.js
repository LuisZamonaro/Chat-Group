import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  width: 400px;
  height: 500px;
  margin: 0 auto;
  margin-top: 200px;

  .inputArea {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  .btnRegister {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 15px;
  }

  #btn {
        width: 90px;
        height: 35px;
        border: 1px solid #00ced1;
        color: #1f8486;
        background-color: #a7e7e8;
        cursor: pointer;
        border-radius: 18px;
    }

    #btn:hover {
        opacity: 0.8;
    }

    input {
        border: 1px solid black;
        width: 200px;
        height: 30px;
        border-radius: 10px;
        padding-left: 10px;
    }

    @media(max-width: 415px) {
    width: 280px;

    p {
      font-size: 14px;
    }
  }
`;

