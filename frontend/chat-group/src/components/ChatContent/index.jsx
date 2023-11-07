import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { profile } from '../../slices/userSlice'
import Chat from '../../Pages/Chat'

const ChatContent = (handleNavbar, setHandleNavbar) => {

  const dispatch = useDispatch()

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    dispatch(profile())
  }, [dispatch])


  return (
    <div className="container">
      <Chat handleNavbar={handleNavbar} setHandleNavbar={setHandleNavbar} socket={socket} setSocket={setSocket} />
    </div>
  )
}

export default ChatContent