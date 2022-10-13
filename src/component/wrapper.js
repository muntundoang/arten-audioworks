import { createContext, useContext, useState, useEffect } from "react";

const { readToken } = require('../axios/index')
const SiteContext = createContext();

export const SiteData = () => useContext(SiteContext)

export const SiteWrapper = ({ children }) => {

    const [userInfo, setUserInfo] = useState({})
    const [isLogin, setIsLogin] = useState(false);

    const userProfile = async (access_token) => {
        try {
            const data = await readToken(access_token)
            if (!data) {
                setUserInfo({
                    fullName: 'Art Friends'
                })
            } else {
                setUserInfo(data.data.profileUser)
                setIsLogin(true)
            }
        } catch (error) {
            console.log('ini error', error)
        }
    }

    const setLogout = (e) => {
        e.preventDefault()
        setUserInfo({
            fullName: 'Art Friends'
        })
        localStorage.clear()
        setIsLogin(false)
    }

    const setLogin = (e, access_token) => {
        e.preventDefault()
        userProfile(access_token)
    }

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        if (!access_token) {
            setUserInfo({
                fullName: 'Art Friends'
            })
        } else {
            userProfile(access_token)
        }
    }, [setUserInfo])

    return (
        <SiteContext.Provider value={{ userInfo, isLogin, setLogout, userProfile, setLogin }}>
            {children}
        </SiteContext.Provider>
    )
}