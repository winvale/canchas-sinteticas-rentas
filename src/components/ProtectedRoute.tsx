import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

interface ProtectedRouteProps {
    children: React.ReactNode
    allowedRole?: 'admin' | 'player'
}

export function ProtectedRoute({ children, allowedRole }: ProtectedRouteProps) {
    const { user, isLoading } = useAuth()
    const location = useLocation()

    if (isLoading) {
        return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Cargando...</div>
    }

    if (!user) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />
    }

    if (allowedRole && user.role !== allowedRole) {
        // Redirect to their appropriate dashboard if they try to access unauthorized route
        return <Navigate to={user.role === 'admin' ? '/admin' : '/player'} replace />
    }

    return <>{children}</>
}
