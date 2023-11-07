import { useAuth } from '../../hooks/useAuth'
import * as S from './styles'
import iconBack from '../../images/icons8-less-than-24.png'
import { useNavbar } from '../../context/navbarContext'
import {AnimatePresence} from 'framer-motion'


const ChatMembers = () => {
  const { auth } = useAuth()

  const { handleNavbar, setHandleNavbar } = useNavbar();


  return (
    <AnimatePresence>
      {handleNavbar == 1 && (
         <S.Container handlenavbar={handleNavbar} auth={auth}
         initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
         >
         <div className="channelMembers">
           <img id='iconBack' src={iconBack} onClick={() => setHandleNavbar(prev => !prev)} />
           All Channels
         </div>
         <div className="members">
           Members:
         </div>
       </S.Container>
      )}
    </AnimatePresence>
  )
}

export default ChatMembers