import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .profileImage {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  input {
    border: 1px solid #4ddbff;
    border-radius: 14px;
    outline: none;
    width: 250px;
    height: 30px;
    padding-left: 15px;
    margin-left: 10px;
  }

  .containerPI {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .editYD {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  #profileImage {
    border: none;
    margin: 0;
  }

  .containerBTN {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  #btn {
    padding: 0;
    width: 100px;
    background-color: #94f4ee;
    color: white;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }

`;
