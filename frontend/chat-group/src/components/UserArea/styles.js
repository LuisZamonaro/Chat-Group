import styled from 'styled-components'


export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 275px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1.5rem;
  background-color: #0b090c;
  height: 75px;

  @media(max-width: 385px) {
    width: 202px;
  }

  #userImage {
    width: 42px;
    height: 42px;
    border-radius: 8px;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  #userName {
    color: #828282;
  }

  .arrowDown {
    width: 12px;
    cursor: pointer;
    display: none;
  }

  .arrowUp {
    width: 12px;
    cursor: pointer;
  }

  .arrowDown.active {
    display: block;
  }

  .arrowUp.active {
    display: none;
  }
`

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
    cursor: pointer;
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

