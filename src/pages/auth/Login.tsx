import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { Button } from "../../components/ui/Button"
import { Input } from "../../components/ui/Input"
import { Card } from "../../components/ui/Card"
import { Mail, Lock, User, Shield } from "lucide-react"

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState<'player' | 'admin'>('player')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            await login(email, password)
            // Get user from storage since state update might be async
            const storedUser = localStorage.getItem('canchas_user')
            if (storedUser) {
                const user = JSON.parse(storedUser)
                if (user.role === 'admin') {
                    navigate('/admin')
                } else {
                    navigate('/player')
                }
            } else {
                // Fallback
                navigate('/player')
            }
        } catch (err: any) {
            setError(err.response?.data?.message || "Error al iniciar sesión")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white">Bienvenido de nuevo</h2>
                <p className="text-gray-400 mt-2">Ingresa a tu cuenta para continuar</p>
            </div>

            <Card className="p-6 bg-white/5 border-none">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm text-center">
                            {error}
                        </div>
                    )}

                    {/* Role Selection */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <button
                            type="button"
                            onClick={() => setRole('player')}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${role === 'player'
                                    ? 'bg-primary/20 border-primary text-primary'
                                    : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'
                                }`}
                        >
                            <User className="w-6 h-6 mb-2" />
                            <span className="text-sm font-bold">Jugador</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setRole('admin')}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${role === 'admin'
                                    ? 'bg-secondary/20 border-secondary text-secondary'
                                    : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'
                                }`}
                        >
                            <Shield className="w-6 h-6 mb-2" />
                            <span className="text-sm font-bold">Admin</span>
                        </button>
                    </div>

                    <Input
                        label="Correo Electrónico"
                        type="email"
                        placeholder="ejemplo@correo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        icon={<Mail className="w-4 h-4" />}
                        required
                    />

                    <Input
                        label="Contraseña"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        icon={<Lock className="w-4 h-4" />}
                        required
                    />

                    <div className="flex justify-end">
                        <Link to="#" className="text-sm text-primary hover:text-primary-light">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>

                    <Button type="submit" className="w-full" isLoading={isLoading}>
                        Iniciar Sesión
                    </Button>
                </form>
            </Card>

            <p className="text-center text-gray-400 text-sm">
                ¿No tienes una cuenta?{" "}
                <Link to="/auth/register" className="text-primary font-bold hover:underline">
                    Regístrate
                </Link>
            </p>
        </div>
    )
}
