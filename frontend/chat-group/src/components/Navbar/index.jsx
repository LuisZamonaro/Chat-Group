import { useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import { profile } from '../../slices/userSlice'
import * as S from './styles'
import RoomList from '../RoomsList'
import iconBack from '../../images/icons8-less-than-24.png'
import CreateRoomForm from '../../Pages/CreateRoom/index'
import { useAuth } from '../../hooks/useAuth'
import UserArea from '../UserArea'
import { useNavbar } from '../../context/navbarContext'
import {AnimatePresence} from 'framer-motion'


const Navbar = () => {

  const [openNewChannel, setOpenNewChannel] = useState(false)
  const [rooms, setRooms] = useState([]);

  const dispatch = useDispatch()

  const { auth } = useAuth()

  const { handleNavbar, setHandleNavbar } = useNavbar();


  useEffect(() => {
    dispatch(profile())
  }, [dispatch])

  return (
    <S.Container handlenavbar={handleNavbar} auth={auth}>
        <AnimatePresence>
          {handleNavbar == 0 && (
             <S.LeftContainer 
             initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
             >
             <S.Channels>
               <div className="left">
                 <img id='iconBack' src={iconBack} onClick={() => setHandleNavbar(prev => !prev)} />
                 <p>Channels</p>
               </div>
               <div className="right">
                 <div className="boxPlus" onClick={() => setOpenNewChannel(prev => !prev)}>
                   <div className="plus">+</div>
                 </div>
               </div>
             </S.Channels>
             <RoomList setRooms={setRooms} rooms={rooms} />
             <UserArea />
             <S.NewChannelContainer opennewchannel={openNewChannel} >
               <S.NewChannelWrapper>
                 <CreateRoomForm setOpenNewChannel={setOpenNewChannel} openNewChannel={openNewChannel} rooms={rooms} setRooms={setRooms} />
                 <S.Shadow onClick={() => setOpenNewChannel(prev => !prev)} />
               </S.NewChannelWrapper>
             </S.NewChannelContainer>
           </S.LeftContainer>
          )}      
        </AnimatePresence>
    </S.Container>
  )
}

export default Navbar