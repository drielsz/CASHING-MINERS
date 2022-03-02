import React, {createContext, useState, useEffect, useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api'
import * as auth from '../services/auth'

interface User {
    name: string,
    email: string
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData >({} as AuthContextData)

// JWT (Stateless, não precisam guardar nenhuma informação lá no back end)
export const AuthProvider: React.FC = ({children}) => {
    const [ user, setUser ] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    // Verificação para saber se o usuario está logado ou não.
    useEffect(() => {
        async function loadStoragedData() {
            // Para melhorar pode ser usado o multiple get 
            const storagedUser = await AsyncStorage.getItem('@GPCAuth: user');
            const storagedToken = await AsyncStorage.getItem('@GPCAuth: token')
            // Loading
            // await new Promise(resolve => setTimeout(resolve, 2000))
            // Verificação
            if (storagedUser && storagedToken) {
                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
                setUser(JSON.parse(storagedUser))
                setLoading(false)
            }
        }
        loadStoragedData()
    },[])

    // Login
    async function signIn() {
        const response = await auth.signIn()
        setUser(response.user)
    }
    // LogOut
    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }

    return(
    <AuthContext.Provider value={{signed: !!user, user, signIn, loading, signOut}}>
        {children}
    </AuthContext.Provider>
    )
}
// Criação do meu proprio hook.
export function useAuth(){
    const context = useContext(AuthContext);
    return context
}

