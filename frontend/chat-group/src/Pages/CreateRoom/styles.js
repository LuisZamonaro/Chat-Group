import styled from 'styled-components'

export const Container = styled.div`
    display: ${({openNewChannel}) => openNewChannel ? 'block' : 'none'};
    position: relative;
    display: flex;
    flex-direction: column;
    width: 456px;
    height: 320px;
    background-color: #120F13;
    border-radius: 14px;
    padding-inline: 2.5rem;
    border: 1px solid white;
    z-index: 999;


    .newChannel {
        margin-left: 40px;
        margin-top: 30px;
        margin-bottom: 25px;
        color: #F2F2F2;
        font-size: 18px;
        font-weight: 700;
        line-height: 24.52px;
    }

    form {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #inputName {
        width: 472px;
        height: 38px;
        margin-bottom: 20px;
        background-color: #3C393F;
        border: none;
        outline: none;
        border-radius: 8px;
        font-size: 18px;
        color: #828282;
        padding-left: 10px;
    }

    input::placeholder {
        color: #828282;
    }

    #textAreaDesc {
        width: 472px;
        height: 95px;
        margin-bottom: 20px;
        background-color: #3C393F;
        border: none;
        outline: none;
        border-radius: 8px;
        max-height: 95px; 
        resize: none;
        font-size: 18px;
        color: #828282;
        padding-left: 10px;
    }

    textarea::placeholder {
        color: #828282;
    }

    .containerBtn {
        display: flex;
        justify-content: flex-end;
        width: 472px;
    }

    #btnSave {
        width: 99px;
        height: 39px;
        background-color: #2F80ED;
        border-radius: 8px;
        font-size: 18px;
        line-height: 24.52px;
        border: none;
        color: #F2F2F2;
        cursor: pointer;
    }

    .iconClose {
        position: absolute;
        right: 40px;
        top: 20px;
    }

    #iconClose {
        cursor: pointer;
        width: 20px;
    }
    
    @media(max-width: 765px) {
        border: 1px solid white;
        width: 356px;
        height: 275px;

        #inputName {
            width: 350px;
        }

        #textAreaDesc {
            width: 350px;
            height: 75px;
        }

        #btnSave {
            width: 70px;
            height: 25px;
            font-size: 16px;
        }

        .containerBtn {
            width: 350px;
        }
    }

    @media(max-width: 500px) {
        width: 280px;
        height: 275px;
        padding-inline: .5rem;

        #inputName {
            width: 260px;
        }

        #textAreaDesc {
            width: 260px;
            height: 75px;
        }

        #btnSave {
            width: 50px;
            height: 25px;
            font-size: 16px;
        }

        .containerBtn {
            width: 260px;
        }
    }
`