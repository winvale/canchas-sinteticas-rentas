import { Button } from "../../components/ui/Button"
import { Card } from "../../components/ui/Card"
import { User, Settings, CreditCard, LogOut, Shield } from "lucide-react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export function PlayerProfile() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/auth/login')
    }

    return (
        <div className="space-y-6">
            <header className="text-center py-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-primary to-secondary p-[3px] mb-4">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                        <span className="text-3xl font-bold text-white">EV</span>
                    </div>
                </div>
                <h1 className="text-2xl font-bold text-white">Edwin Valencia</h1>
                <p className="text-gray-400">Jugador Amateur</p>
            </header>

            <div className="grid grid-cols-3 gap-4 text-center">
                <Card className="p-3 bg-white/5 border-none">
                    <span className="block text-2xl font-bold text-primary">12</span>
                    <span className="text-xs text-gray-400">Partidos</span>
                </Card>
                <Card className="p-3 bg-white/5 border-none">
                    <span className="block text-2xl font-bold text-secondary">4.8</span>
                    <span className="text-xs text-gray-400">Rating</span>
                </Card>
                <Card className="p-3 bg-white/5 border-none">
                    <span className="block text-2xl font-bold text-green-400">0</span>
                    <span className="text-xs text-gray-400">Faltas</span>
                </Card>
            </div>

            <section className="space-y-3">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Cuenta</h3>

                <Card className="p-0 overflow-hidden">
                    <button className="w-full flex items-center p-4 hover:bg-white/5 transition-colors text-left">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mr-4">
                            <User className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white">Datos Personales</h4>
                            <p className="text-xs text-gray-400">Editar nombre, email, teléfono</p>
                        </div>
                    </button>

                    <div className="h-[1px] bg-white/5 mx-4" />

                    <button className="w-full flex items-center p-4 hover:bg-white/5 transition-colors text-left">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 mr-4">
                            <CreditCard className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white">Métodos de Pago</h4>
                            <p className="text-xs text-gray-400">Tarjetas, Nequi, Daviplata</p>
                        </div>
                    </button>
                </Card>

                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1 mt-6">Ajustes</h3>

                <Card className="p-0 overflow-hidden">
                    <button className="w-full flex items-center p-4 hover:bg-white/5 transition-colors text-left">
                        <div className="w-10 h-10 rounded-full bg-gray-500/20 flex items-center justify-center text-gray-400 mr-4">
                            <Settings className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white">Preferencias</h4>
                            <p className="text-xs text-gray-400">Notificaciones, tema</p>
                        </div>
                    </button>

                    <div className="h-[1px] bg-white/5 mx-4" />

                    <button className="w-full flex items-center p-4 hover:bg-white/5 transition-colors text-left">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mr-4">
                            <Shield className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white">Seguridad</h4>
                            <p className="text-xs text-gray-400">Contraseña, 2FA</p>
                        </div>
                    </button>
                </Card>

                <Button
                    variant="danger"
                    className="w-full mt-8 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20"
                    onClick={handleLogout}
                >
                    <LogOut className="w-4 h-4 mr-2" />
                    Cerrar Sesión
                </Button>
            </section>
        </div>
    )
}
