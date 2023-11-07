import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Join = ({ setChatVisibility, setSocket }) => {
  const { user } = useSelector((state) => state.user);

  const handleSubmit = async () => {
    const username = user.name;
    const socket = await io.connect('http://localhost:3002');
    socket.emit('set_username', username);
    setSocket(socket);
    console.log(username);
    setChatVisibility(true);
  };

  return (
    <div className="container">
      <button onClick={handleSubmit}>Ir para chat</button>
    </div>
  );
};

Join.propTypes = {
  setChatVisibility: PropTypes.func.isRequired,
  setSocket: PropTypes.func.isRequired,
};

export default Join;
