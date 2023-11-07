import { logout, reset } from '../../slices/authSlice'
import * as S from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import downArrow from '../../images/icons8-down-arrow-50.png'
import upArrow from '../../images/icons8-collapse-arrow-50.png'
import iconUser from '../../images/icons8-male-user-64.png'
import iconTwitter from '../../images/icons8-twitter-50.png'
import iconLogout from '../../images/icons8-logout-24.png'
import { upload } from '../../utils/config'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser } from '../../slices/userSlice'




const UserArea = () => {

    const [openArrow, setOpenArrow] = useState(0)
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        dispatch(resetUser())
        navigate("/login")
      }

  return (
    <S.Container>
    <div className="left">
      <div className="userImage">
        <img id='userImage' src={`${upload}/users/${user.profileImage}`}/>
      </div>
      <p id='userName'>{user.name}</p>
    </div>
    <div className="arrows" onClick={() => setOpenArrow(prev => !prev)}>
      <img className={`arrowDown ${openArrow == true ? 'active' : ''}`} src={downArrow} />
      <img className={`arrowUp ${openArrow == true ? 'active' : ''}`} src={upArrow} />
    </div>
    <S.OpenArrow openarrow={openArrow} >
      <div className="myProfile">
        <div className="contentMP">
          <div className="iconProfile">
            <img id='iconUser' src={iconUser} />
          </div>
          <Link to="/profile">My Profile</Link>
        </div>
      </div>
      <div className="twitter">
        <img id='iconTwitter' src={iconTwitter} />
        <p>Twitter</p>
      </div>
      <div className="hr"></div>
      <div className="logout">
        <img id='iconLogout' src={iconLogout} />
        <p className='pLogout' onClick={handleLogout}>Logout</p>
      </div>
    </S.OpenArrow>
  </S.Container>
  )
}

export default UserArea