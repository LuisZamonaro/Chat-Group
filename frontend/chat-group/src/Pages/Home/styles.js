import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 450px;
    height: 30px;
    border-radius: 16px;
    color: white;
    background-color: #120f13;
    border: 1px solid white;
    padding-inline: 1rem;
    text-align: center;
    padding-top: 5px;

    @media(max-width: 510px) {
        width: 350px;
        height: 42px;
        font-size: 14px;
    }

    @media(max-width: 390px) {
        width: 250px;
        height: 42px;
        font-size: 13px;
    }
`