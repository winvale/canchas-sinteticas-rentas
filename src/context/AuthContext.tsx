import React, { createContext, useContext, useState, useEffect } from 'react'
import api from '../services/api'

type UserRole = 'admin' | 'player' | 'user'

interface User {
    id: number
    name: string
    email: string
    role: UserRole
}

interface AuthContextType {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    register: (email: string, password: string, name: string, role?: string) => Promise<void>
    logout: () => void
    isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check for stored user on mount
        const storedUser = localStorage.getItem('canchas_user')
        const token = localStorage.getItem('token')
        if (storedUser && token) {
            setUser(JSON.parse(storedUser))
        }
        setIsLoading(false)
    }, [])

    const login = async (email: string, password: string) => {
        try {
            const response = await api.post('/login', { email, password })
            const { token, user } = response.data
            localStorage.setItem('token', token)
            localStorage.setItem('canchas_user', JSON.stringify(user))
            setUser(user)
        } catch (error) {
            console.error('Login failed:', error)
            throw error
        }
    }

    const register = async (email: string, password: string, name: string, role?: string) => {
        try {
            const response = await api.post('/register', { email, password, name, role })
            const { token, user } = response.data
            localStorage.setItem('token', token)
            localStorage.setItem('canchas_user', JSON.stringify(user))
            setUser(user)
        } catch (error) {
            console.error('Registration failed:', error)
            throw error
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('canchas_user')
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
