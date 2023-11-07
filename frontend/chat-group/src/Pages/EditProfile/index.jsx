import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { profile, resetMessage, updateProfile } from '../../slices/userSlice'
import { upload } from "../../utils/config"
import Message from "../../components/Message"
import * as S from './styles'
// framer motion

const EditProfile = () => {
    const dispatch = useDispatch()

    const { user, message, error, loading } = useSelector((state) => state.user)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    // Load user data

    useEffect(() => {
        dispatch(profile())
    }, [dispatch])

    // Fill form with user data
    useEffect(() => {

        if (user) {
            setName(user.name)
            setEmail(user.email)
        }

    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Gather user date from states
        const userData = {
            name
        }

        if (profileImage) {
            userData.profileImage = profileImage
        }

        if (password) {
            userData.password = password
        }

        // build form data
        const formData = new FormData()


        for (const key of Object.keys(userData)) {
            // de cada chava do objeto (name, password) ele adciona o novo valor
            // {name: 'asd',
            // password: 'asdasdasd'}
            formData.append(key, userData[key])
        }

        dispatch(updateProfile(formData))
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)


    }

    const handleFile = (e) => {
        // image preview
        const image = e.target.files[0]

        setPreviewImage(image)

        // update image state
        setProfileImage(image)
    }


    return (
        <S.Container>
            <S.Wrapper>
                <div className="container">
                    <div className="editYD">
                        <h1>Edit your datas</h1>
                        <h3>Profile image</h3>
                    </div>
                    <div className="containerPI">
                        {(user.profileImage || previewImage) && (
                            <img
                                className="profileImage"
                                src={
                                    previewImage
                                        ? URL.createObjectURL(previewImage)
                                        : `${upload}/users/${user.profileImage}`
                                }
                                alt={user.name}
                            />
                        )}
                    </div>
                    <S.Form onSubmit={handleSubmit}>
                        <label>
                            <span>Change username</span>
                            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name || ''} />
                        </label>
                        <label htmlFor="">
                            <span>Your user email</span>
                            <input type="email" placeholder="E-mail" disabled value={email || ''} />
                        </label>
                        <label>
                            <span>Profile image:</span>
                            <input id="profileImage" type="file" onChange={handleFile} />
                        </label>
                        <label>
                            <span>Change your password here</span>
                            <input type="password" placeholder="Enter your new password" onChange={(e) => setPassword(e.target.value)} value={password || ''} />
                        </label>
                        {!loading && <div className="containerBTN"> <input id="btn" type="submit" value="Update" /> </div>}
                        {loading && <div className="containerBTN"> <input id="btn" type="submit" disabled value="Wait..." /> </div>}
                        {error && <div className="containerBTN"><Message msg={error} type="error" /></div>}
                        {message && <div className="containerBTN"><Message msg={message} type="success" /></div>}
                    </S.Form>
                </div>
            </S.Wrapper>
        </S.Container>
    )
}

export default EditProfile