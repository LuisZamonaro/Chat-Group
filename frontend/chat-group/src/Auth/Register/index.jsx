import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import Message from "../../components/Message"
//Redux
import { register, reset } from "../../slices/authSlice"
import * as S from './styles'

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()

    const { loading, error } = useSelector((state) => state.auth)


    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name,
            email,
            password,
            confirmPassword
        }

        console.log(user)

        dispatch(register(user))
    }

    // Clean all auth states
    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    return (
        <S.Container>
            
            <h2>Chat Group</h2>
            <div className="subtitle"></div>
            <form onSubmit={handleSubmit}>
                <div className="inputArea">
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name || ''} />
                    <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email || ''} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password || ''} />
                    <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword || ''} />
                </div>
                <div className="btnRegister">
                    {!loading && <input type="submit" value="Register" id="btn" />}
                    {loading && <input type="submit" value="Wait..." disabled id="btn" />}
                </div>
                {error && <Message msg={error} type="error" />}
            </form>
            <p>Already have an account? <Link to="/login">Click here</Link></p>
        </S.Container>
    )
}

export default Register