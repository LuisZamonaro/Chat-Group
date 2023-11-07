import { Link } from 'react-router-dom'
import Message from '../../components/Message/index'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Redux
import { login, reset } from '../../slices/authSlice'
import * as S from './styles'


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const { loading, error} = useSelector((state) => state.auth)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {
      email,
      password
    }

    dispatch(login(user))

  }

  // Clean all auth states
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <S.Container>
      <h1>Chat Group</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputArea">
          <div className="inputEmail">
            <input type="text" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} value={email || ''} />
          </div>
          <div className="inputPassword">
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password || ''} />
          </div>
        </div>
        <div className="btnSubmit">
          {!loading && <input type="submit" value="Entry" id='btn' />}
          {loading && <input type="submit" value="Wait..." disabled id='btn' />}
        </div>       
        {error && <Message msg={error} type="error" />}
      </form>
      <p>Did you not have an account? <Link to="/register">Click here</Link></p>
      </S.Container>
  )
}

export default Login