import { Button } from "../../components/ui/Button"
import { Card } from "../../components/ui/Card"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { cn } from "../../lib/utils"

export function AdminSchedule() {
    const hours = Array.from({ length: 14 }, (_, i) => i + 8) // 8am to 9pm
    const fields = ["Cancha 1", "Cancha 2", "Cancha 3"]

    // Mock bookings
    const bookings = [
        { field: 0, hour: 10, user: "Juan Pérez", status: "confirmed" },
        { field: 1, hour: 18, user: "Liga Veteranos", status: "confirmed" },
        { field: 2, hour: 19, user: "Torneo A", status: "pending" },
    ]

    const getBooking = (fieldIndex: number, hour: number) => {
        return bookings.find(b => b.field === fieldIndex && b.hour === hour)
    }

    return (
        <div className="space-y-6">
            <header className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-bold text-white">Calendario de Reservas</h2>
                    <div className="flex items-center bg-white/5 rounded-lg p-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronLeft className="w-4 h-4" /></Button>
                        <span className="px-4 text-sm font-medium text-white">Nov 29, 2025</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronRight className="w-4 h-4" /></Button>
                    </div>
                </div>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Nueva Reserva
                </Button>
            </header>

            <Card className="p-0 overflow-hidden bg-dark-card/50">
                <div className="overflow-x-auto">
                    <div className="min-w-[800px]">
                        {/* Header Row */}
                        <div className="grid grid-cols-[100px_1fr_1fr_1fr] border-b border-white/10">
                            <div className="p-4 text-center text-gray-400 font-medium border-r border-white/10">Hora</div>
                            {fields.map((field, i) => (
                                <div key={i} className={`p-4 text-center text-white font-bold ${i < fields.length - 1 ? 'border-r border-white/10' : ''}`}>
                                    {field}
                                </div>
                            ))}
                        </div>

                        {/* Time Slots */}
                        {hours.map((hour) => (
                            <div key={hour} className="grid grid-cols-[100px_1fr_1fr_1fr] border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                <div className="p-4 text-center text-gray-500 text-sm border-r border-white/10 flex items-center justify-center">
                                    {hour}:00
                                </div>
                                {fields.map((_, fieldIndex) => {
                                    const booking = getBooking(fieldIndex, hour)
                                    return (
                                        <div key={fieldIndex} className={`p-2 ${fieldIndex < fields.length - 1 ? 'border-r border-white/10' : ''}`}>
                                            {booking ? (
                                                <div className={cn(
                                                    "w-full h-full rounded-lg p-2 text-xs font-medium cursor-pointer transition-transform hover:scale-[1.02]",
                                                    booking.status === 'confirmed' ? "bg-primary/20 text-primary border border-primary/20" : "bg-yellow-500/20 text-yellow-500 border border-yellow-500/20"
                                                )}>
                                                    <p className="font-bold truncate">{booking.user}</p>
                                                    <p className="opacity-80 capitalize">{booking.status}</p>
                                                </div>
                                            ) : (
                                                <div className="w-full h-full rounded-lg hover:bg-white/5 cursor-pointer group flex items-center justify-center">
                                                    <Plus className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )
}
