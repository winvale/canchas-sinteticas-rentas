import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { Button } from "../../components/ui/Button"
import { Input } from "../../components/ui/Input"
import { Card } from "../../components/ui/Card"
import { Mail, Lock, User, Shield } from "lucide-react"

export function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState<'player' | 'admin'>('player')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const { register } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            await register(email, password, name, role)
            navigate(role === 'admin' ? '/admin' : '/player')
        } catch (err: any) {
            setError(err.response?.data?.message || "Error al registrarse")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white">Crear Cuenta</h2>
                <p className="text-gray-400 mt-2">Únete a la comunidad de fútbol</p>
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
                        label="Nombre Completo"
                        type="text"
                        placeholder="Tu nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        icon={<User className="w-4 h-4" />}
                        required
                    />

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

                    <Button type="submit" className="w-full" isLoading={isLoading}>
                        Registrarse
                    </Button>
                </form>
            </Card>

            <p className="text-center text-gray-400 text-sm">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/auth/login" className="text-primary font-bold hover:underline">
                    Inicia Sesión
                </Link>
            </p>
        </div>
    )
}
