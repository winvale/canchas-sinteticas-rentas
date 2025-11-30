import { Card } from "../../components/ui/Card"
import { DollarSign, Users, Calendar, TrendingUp } from "lucide-react"

export function AdminDashboard() {
    const stats = [
        { label: "Ingresos Totales", value: "$2.4M", icon: DollarSign, color: "text-green-500", bg: "bg-green-500/20" },
        { label: "Reservas Activas", value: "124", icon: Calendar, color: "text-blue-500", bg: "bg-blue-500/20" },
        { label: "Usuarios Nuevos", value: "+48", icon: Users, color: "text-purple-500", bg: "bg-purple-500/20" },
        { label: "Crecimiento", value: "+12%", icon: TrendingUp, color: "text-orange-500", bg: "bg-orange-500/20" },
    ]

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Card key={index} className="flex items-center p-6 hover:bg-white/5 transition-colors">
                        <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center ${stat.color} mr-4`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Recent Activity & Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Resumen de Reservas</h3>
                    <div className="h-64 flex items-end justify-between space-x-2">
                        {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                            <div key={i} className="w-full bg-primary/20 rounded-t-lg relative group">
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg transition-all duration-500 group-hover:bg-primary-light"
                                    style={{ height: `${h}%` }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-gray-400 text-sm">
                        <span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span>
                    </div>
                </Card>

                <Card className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Actividad Reciente</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center space-x-3 pb-3 border-b border-white/5 last:border-0">
                                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">
                                    U{i}
                                </div>
                                <div>
                                    <p className="text-sm text-white font-medium">Nueva reserva confirmada</p>
                                    <p className="text-xs text-gray-400">Hace {i * 15} minutos</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}
