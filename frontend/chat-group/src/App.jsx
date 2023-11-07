import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from './Auth/Login'
import Register from './Auth/Register'
import { CreateGlobalStyle } from './styles/GlobalStyles'
import { useAuth } from './hooks/useAuth'
import EditProfile from './Pages/EditProfile'
import Room from './components/Room'
import RoomList from './components/RoomsList'
import Home from './Pages/Home'
import * as S from './styles/stylesApp'
import { NavbarProvider } from './context/navbarContext'
import { MenuProvider } from './context/menuContext'
import BoxMenu from './components/BoxMenu'


function App() {

  const { auth, loading } = useAuth()
  

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <S.Container>
      <CreateGlobalStyle />
      <BrowserRouter>
        <MenuProvider>
        <NavbarProvider>
          <BoxMenu/>
          <Routes>
            <Route path='/' element={auth ? <Home /> : <Navigate to="/login" />} />
            <Route path='/login' element={!auth ? <Login /> : <Navigate to="/" />} />
            <Route path='/register' element={!auth ? <Register /> : <Navigate to="/" />} />
            <Route path='/profile' element={auth ? <EditProfile /> : <Navigate to="/login" />} />
            <Route path='/rooms/:roomId' element={auth ? <Room /> : <Navigate to="/login" />} />
            <Route path='/rooms' element={auth ? <RoomList /> : <Navigate to="/login" />} />
          </Routes>
        </NavbarProvider>
        </MenuProvider>
      </BrowserRouter>
    </S.Container>
  )
}

export default App
