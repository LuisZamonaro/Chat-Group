import { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import * as S from './styles';
import iconSent from '../../images/icons8-sent-48.png';
import moment from 'moment';
import { io } from "socket.io-client";
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useParams } from "react-router-dom";
import { upload } from "../../utils/config";
import { scroller, Element } from 'react-scroll';
import { useNavbar } from "../../context/navbarContext";
import iconHamb from '../../images/icons8-cardápio-50.png'
import iconClose from '../../images/icons8-close-30.png'
import { useMenu } from "../../context/menuContext";

const Chat = ({ socket, setSocket }) => {
    const messageRef = useRef();
    const [messageList, setMessageList] = useState([]);
    const [closeWC, setCloseWC] = useState(0);
    const [roomName, setRoomName] = useState('');
    const [roomDesc, setRoomDesc] = useState('')

    const { user } = useSelector((state) => state.user);
    const { roomId } = useParams();

    const { handleNavbar } = useNavbar();
    const { handleMenu, setHandleMenu } = useMenu()

    const handleSubmitt = async () => {
        const username = user.name;
        const socket = await io.connect('http://localhost:3002');
        socket.emit('set_username', username);
        setSocket(socket);
        setCloseWC(1);
    }

    useEffect(() => {
        if (socket) {
            socket.on('receive_message', data => {
                setMessageList((current) => [...current, data]);
                scrollToBottom();
            });

            return () => socket.off('receive_message');
        }
    }, [socket]);

    const handleSubmit = () => {
        const message = messageRef.current.value;

        if (!message.trim()) return;

        socket.emit('message', message);
        clearInput();
    }

    const clearInput = () => {
        messageRef.current.value = '';
    }

    const getEnterKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const scrollToBottom = () => {
        scroller.scrollTo('scrollToBottom', {
            containerId: 'chat-container',
            duration: 500,
            smooth: true,
        });
    }

    const getRoomName = useCallback(async () => {
        const response = await fetch(`http://localhost:3001/rooms/${roomId}`)
        const roomName = await response.json()
        setRoomName(roomName.name)
    }, [roomId])

    const getRoomDesc = useCallback(async () => {
        const response = await fetch(`http://localhost:3001/rooms/${roomId}`)
        const roomDesc = await response.json()
        setRoomDesc(roomDesc.description)
    }, [roomId])

    useEffect(() => {
        getRoomName();
        getRoomDesc()
        scrollToBottom();
    }, [getRoomName, getRoomDesc]);

    return (
        <S.Container handlemenu={handleMenu} >
            <div className="roomName">
                <img id="hamb" src={iconHamb} onClick={() => setHandleMenu(prev => !prev)} />
                <p>{roomName}</p>
                <S.IconCloseMobile handlemenu={handleMenu} >
                    <div className="containerIconClose" onClick={() => setHandleMenu(prev => !prev)}>
                        <img id='iconClose' src={iconClose} />
                    </div>
                </S.IconCloseMobile>
                <S.RoomDesc handlenavbar={handleNavbar} handlemenu={handleMenu}>
                    <div><p>{roomName}</p></div>
                    <div><p>{roomDesc}</p></div>
                </S.RoomDesc>
            </div>
            <S.ContainerChat>
                <S.WrapperChat id="chat-container">
                    {
                        messageList.map((message, index) => (
                            <S.MessageList key={index}>
                                <div className="leftContentMessage">
                                    <div className="userPhoto">
                                        <img id="userPhoto" src={`${upload}/users/${user.profileImage}`} alt="User Profile" />
                                    </div>
                                </div>
                                <div className="rightContentMessage">
                                    <div className="messageMeta">
                                        <span className="mAuthor">{message.author}</span>
                                        <span className="mTime">{moment(message.timestamp).format('LLL')}</span>
                                    </div>
                                    <div className="mText">{message.text}</div>
                                </div>
                            </S.MessageList>
                        ))
                    }
                    <Element name="scrollToBottom" />
                </S.WrapperChat>
                <div className="messageContainer">
                    <div className="messageWrapper">
                        <div className="containerInput">
                            <input type="text" ref={messageRef} placeholder="Type a message here" onKeyDown={getEnterKey} />
                        </div>
                        <img id="iconSent" src={iconSent} alt="Send Message" onClick={handleSubmit} />
                    </div>
                </div>
                <S.ActiveChat closewc={closeWC}>
                    <div className="activeChatWrapper">
                        <div className="wCMessage">You just joined the chat, welcome!</div>
                        <button onClick={handleSubmitt}>Done</button>
                    </div>
                </S.ActiveChat>
            </S.ContainerChat>
            <S.Shadow closewc={closeWC} onClick={handleSubmitt} />
        </S.Container>
    );
}

Chat.propTypes = {
    socket: PropTypes.shape({
        on: PropTypes.func.isRequired,
        off: PropTypes.func.isRequired,
        emit: PropTypes.func.isRequired,
    }).isRequired,
    setSocket: PropTypes.func.isRequired,
};

export default Chat;
