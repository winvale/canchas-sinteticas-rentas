import { useAuth } from "../../context/AuthContext"

export function PlayerHome() {
    const { user } = useAuth()

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">
                Hola, {user?.name || 'Jugador'} 👋
            </h1>
            <p className="text-gray-400">
                Bienvenido al dashboard de jugadores
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-white">Email: {user?.email}</p>
                <p className="text-white">Rol: {user?.role}</p>
            </div>
        </div>
    )
}
