import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles' 
import iconClose from '../../images/icons8-close-30.png'
import PropTypes from 'prop-types';


function CreateRoomForm({setOpenNewChannel, openNewChannel, setRooms}) {
  const [roomName, setRoomName] = useState('');
  const [roomDesc, setRoomDesc] = useState('')
  const navigate = useNavigate();
  const handleCreateRoom = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: roomName, description: roomDesc }),
      });

      if (response.ok) {
        const roomData = await response.json();
        setRooms(prev => [...prev, roomData])
        navigate(`/rooms/${roomData._id}`);
      } else {
        console.error('Erro ao criar a sala');
      }
    } catch (error) {
      console.error('Erro ao criar a sala', error);
    }

    setOpenNewChannel(false)
  };

  return (
    <S.Container openNewChannel={openNewChannel}>
      <div className="newChannel">
        New Channel
      </div>
      <form onSubmit={handleCreateRoom}>
        <div className="iconClose">
          <img id='iconClose' src={iconClose} onClick={() => setOpenNewChannel(prev => !prev)} />
        </div>
        <input id='inputName' type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} required placeholder='Channel name' />
        <textarea id='textAreaDesc' cols="40"  value={roomDesc} onChange={(e) => setRoomDesc(e.target.value)} required placeholder='Channel description' />
        <div className="containerBtn">
          <button id='btnSave' type="submit">Save</button>
        </div>
      </form>
    </S.Container>
  );
}

CreateRoomForm.propTypes = {
  openNewChannel: PropTypes.bool.isRequired,
  setOpenNewChannel: PropTypes.func.isRequired,
  setRooms: PropTypes.func.isRequired,
};

export default CreateRoomForm;
