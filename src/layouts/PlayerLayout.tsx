import { Outlet, NavLink } from "react-router-dom"
import { Home, Calendar, User } from "lucide-react"
import { cn } from "../lib/utils"

export function PlayerLayout() {
    return (
        <div className="min-h-screen bg-gray-900 pb-20">
            {/* Main Content Area */}
            <main className="container max-w-md mx-auto p-4">
                <Outlet />
            </main>

            {/* Bottom Navigation Bar */}
            <nav className="fixed bottom-0 left-0 right-0 bg-dark-card backdrop-blur-lg border-t border-white/10 pb-safe">
                <div className="container max-w-md mx-auto flex justify-around items-center h-16">
                    <NavLink
                        to="/player"
                        end
                        className={({ isActive }) =>
                            cn(
                                "flex flex-col items-center justify-center w-full h-full space-y-1 text-xs font-medium transition-colors",
                                isActive ? "text-primary" : "text-gray-400 hover:text-gray-200"
                            )
                        }
                    >
                        <Home className="w-6 h-6" />
                        <span>Inicio</span>
                    </NavLink>

                    <NavLink
                        to="/player/book"
                        className={({ isActive }) =>
                            cn(
                                "flex flex-col items-center justify-center w-full h-full space-y-1 text-xs font-medium transition-colors",
                                isActive ? "text-primary" : "text-gray-400 hover:text-gray-200"
                            )
                        }
                    >
                        <Calendar className="w-6 h-6" />
                        <span>Reservar</span>
                    </NavLink>

                    <NavLink
                        to="/player/profile"
                        className={({ isActive }) =>
                            cn(
                                "flex flex-col items-center justify-center w-full h-full space-y-1 text-xs font-medium transition-colors",
                                isActive ? "text-primary" : "text-gray-400 hover:text-gray-200"
                            )
                        }
                    >
                        <User className="w-6 h-6" />
                        <span>Perfil</span>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}
