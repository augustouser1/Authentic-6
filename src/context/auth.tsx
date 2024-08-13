import { IAuthenticated, IUser } from "../services/data/User";
import React, {createContext, useCallback, useState, useEffect, ReactNode, Dispatch, SetStateAction} from 'react';
import {api} from '../services/api';
import {apiUser} from '../services/data'
import { isAfter, parseISO } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface IAuthContextData{
    signIn(data: IUser): Promise<void>,
    signOut(): Promise<void>,
    user?: IAuthenticated,
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>
}

export interface IProvider{
    children: ReactNode
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

function AuthProvider({children}:IProvider){
    const [auth, setAuth] = useState<IAuthenticated>({} as IAuthenticated)
    const [loading, setLoading] = useState<boolean>(false)
    const signIn = useCallback(async ({email, password}: IUser) => {
        const response = await apiUser.login({email, password})
        const user = response.data
        api.defaults.headers.common.Authorization = `Bearer ${user.token ? user.token.token : ""}`
        //api.defaults.headers.common.Authorization = `Bearer ${user.token.token}`
        setAuth({...user})
        await AsyncStorage.setItem("user", JSON.stringify({...user}))
    }, [])
    const removeAsyncStorage = useCallback(async () => {
        await AsyncStorage.removeItem("user")
    }, [])
    const signOut = useCallback(async () => {
        delete api.defaults.headers.common.Authorization,
        setAuth({} as IAuthenticated)
        await removeAsyncStorage()
        //await AsyncStorage.removeItem("user")
    }, [])
    const continueUserStorageData = useCallback(async () => {
        const userSTR = await AsyncStorage.getItem("user")
        if(userSTR){
            const user = JSON.parse(userSTR) as IAuthenticated
            if(isAfter(parseISO(user.token.expires_at), new Date())){
                api.defaults.headers.common.Authorization = `Bearer ${user.token.token}`
                setAuth({...user})
                return true
            }else{
                await removeAsyncStorage()
                return false
            }
        }
        return false
    }, [])
    useEffect(() => {
        continueUserStorageData()
    }, [])
    return(
        <AuthContext.Provider
        value={{
            signIn,
            signOut,
            user:auth,
            loading,
            setLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export{AuthProvider, AuthContext}