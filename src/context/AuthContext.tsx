import React, { createContext, useContext, useState, useEffect } from 'react'

type UserRole = 'admin' | 'player'

interface User {
    id: string
    name: string
    email: string
    role: UserRole
}

interface AuthContextType {
    user: User | null
    login: (email: string, role: UserRole) => void
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
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
        setIsLoading(false)
    }, [])

    const login = (email: string, role: UserRole) => {
        const mockUser: User = {
            id: '1',
            name: email.split('@')[0], // Mock name from email
            email,
            role
        }
        setUser(mockUser)
        localStorage.setItem('canchas_user', JSON.stringify(mockUser))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('canchas_user')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
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
