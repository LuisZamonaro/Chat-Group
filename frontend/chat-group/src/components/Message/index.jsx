import PropTypes from 'prop-types';

import * as S from './styles';

const Message = ({ msg, type }) => {
    return (
        <S.Container>
            <div className="container">
                <div className={`message ${type}`}>
                    <p>{msg}</p>
                </div>
            </div>
        </S.Container>
    );
};

Message.propTypes = {
    msg: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Message;
