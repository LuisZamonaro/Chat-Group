import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 1.5rem;
  margin-top: 25px;
  gap: 15px;

  #linkRoom {
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    text-decoration: none;
    color: #bdbdbd;
    font-size: 18px;
    font-weight: 700;
    border-radius: 12px;
  }
`;

export const IndividualRoom = styled.div`
  margin-bottom: 20px;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: .5rem;
    border: 1px solid transparent;
  }

  .content:hover {
    border: 1px solid #f2f2f2;
  }

  #iconDelete {
    width: 20px;
    border: none;
    cursor: pointer;
  }

  .rNInitials {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background-color: #252329;
    color: #FFFFFF;
    border-radius: 8px;
  }
`;

export const ChannelArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const InputContainer = styled.div`
  position: relative;
  margin-top: 20px;

  #imageSearch {
    position: absolute;
    top: 15px;
    left: 5px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const InputSearch = styled.input`
  background-color: #3c393f;
  border: none;
  outline: none;
  width: 230px;
  height: 48px;
  border-radius: 8px;
  padding-left: 35px;

  @media(max-width: 385px) {
    width: 190px;
  }
`;
