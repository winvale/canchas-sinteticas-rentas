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

    // Debug logging
    console.log('ProtectedRoute - User role:', JSON.stringify(user.role), 'Type:', typeof user.role)
    console.log('ProtectedRoute - Allowed role:', JSON.stringify(allowedRole), 'Type:', typeof allowedRole)
    console.log('ProtectedRoute - Comparison result:', user.role !== allowedRole)

    if (allowedRole && user.role !== allowedRole) {
        console.log('Access denied - redirecting to:', user.role === 'admin' ? '/admin' : '/player')
        // Redirect to their appropriate dashboard if they try to access unauthorized route
        return <Navigate to={user.role === 'admin' ? '/admin' : '/player'} replace />
    }

    console.log('Access granted - rendering children')
    return <>{children}</>
}
