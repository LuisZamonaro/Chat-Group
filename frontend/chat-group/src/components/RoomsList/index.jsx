import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import iconDelete from '../../images/icons8-close-30.png';
import imageSearch from '../../images/icons8-search-50.png';

function RoomList({ rooms, setRooms }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/rooms')
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error('Error fetching room list', error));
  }, [setRooms]);

  const handleDeleteRoom = async (id) => {
    if (!id) return;

    await fetch(`http://localhost:3001/rooms/${id}`, {
      method: 'DELETE'
    });

    setRooms((prev) => prev.filter((room) => room._id !== id));
  }

  const filteredRooms = rooms.filter(room => room.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <S.Container>
      <S.ChannelArea>
        <S.InputContainer>
          <img id="imageSearch" src={imageSearch} />
          <S.InputSearch
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </S.InputContainer>
      </S.ChannelArea>
      {filteredRooms.map((room) => (
        <S.IndividualRoom key={room._id}>
          <div className="content">
            <Link id="linkRoom" to={`/rooms/${room._id}`}>
              <div className="rNInitials">{room.name.substring(0, 2).toUpperCase()}</div> {room.name}
            </Link>
            <img src={iconDelete} id="iconDelete" onClick={() => handleDeleteRoom(room._id)} />
          </div>
        </S.IndividualRoom>
      ))}
    </S.Container>
  );
}

RoomList.propTypes = {
  rooms: PropTypes.array.isRequired,
  setRooms: PropTypes.func.isRequired,
};

export default RoomList;
