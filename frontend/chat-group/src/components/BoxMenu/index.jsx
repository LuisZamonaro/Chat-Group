import * as S from './styles'
import Navbar from '../Navbar'
import ChatMembers from '../ChatMembers'
import { useMenu } from '../../context/menuContext'
import { useAuth } from '../../hooks/useAuth'
import {AnimatePresence} from 'framer-motion'

const BoxMenu = () => {

    const {handleMenu} = useMenu()

    const {auth} = useAuth()

  return (
    <AnimatePresence>
    <S.Container handlemenu={handleMenu}>
        {auth && <Navbar/>}
        {auth && <ChatMembers/>}
    </S.Container>
    </AnimatePresence>
  )
}

export default BoxMenu