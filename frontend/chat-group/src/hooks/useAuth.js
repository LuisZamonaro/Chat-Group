import { useState, useEffect } from "react";
import {useSelector} from 'react-redux' // pegar a dado da store.js

export const useAuth = () => { // verificar se o usuário está logado

    const {user} = useSelector((state) => (state.auth))

    const [auth, setAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        if(user) {
            setAuth(true)
        } else {
            setAuth(false)
        }

        setLoading(false)

    }, [user])

    return {auth, loading}

}