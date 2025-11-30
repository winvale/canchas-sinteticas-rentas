import { Outlet, NavLink, useNavigate } from "react-router-dom"
import { LayoutDashboard, Calendar, Users, LogOut, Settings } from "lucide-react"
import { cn } from "../lib/utils"
import { Button } from "../components/ui/Button"
import { useAuth } from "../context/AuthContext"

export function AdminLayout() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/auth/login')
    }

    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard", to: "/admin" },
        { icon: Calendar, label: "Calendario", to: "/admin/schedule" },
        { icon: Users, label: "Usuarios", to: "/admin/users" },
    ]

    return (
        <div className="min-h-screen bg-gray-900 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-dark-card border-r border-white/10 flex flex-col">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-white tracking-tight">
                        Canchas<span className="text-primary">Admin</span>
                    </h1>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === "/admin"}
                            className={({ isActive }) =>
                                cn(
                                    "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200",
                                    isActive
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                )
                            }
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10 space-y-2">
                    <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                        <Settings className="w-5 h-5 mr-3" />
                        Configuración
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        onClick={handleLogout}
                    >
                        <LogOut className="w-5 h-5 mr-3" />
                        Cerrar Sesión
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="h-16 border-b border-white/10 flex items-center justify-between px-8 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
                    <h2 className="text-xl font-bold text-white">Panel de Control</h2>
                    <div className="flex items-center space-x-4">
                        <div className="text-right">
                            <p className="text-sm font-bold text-white">Admin User</p>
                            <p className="text-xs text-gray-400">Administrador</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                            A
                        </div>
                    </div>
                </header>
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
