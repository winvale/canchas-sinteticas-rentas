import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from "../../components/ui/Button"
import { Card } from "../../components/ui/Card"
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"

export function PlayerBooking() {
    const location = useLocation()
    const [selectedDate, setSelectedDate] = useState<number>(new Date().getDate())
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [fieldName, setFieldName] = useState<string>("Cancha")

    useEffect(() => {
        if (location.state?.time) {
            setSelectedTime(location.state.time)
        }
        if (location.state?.fieldId) {
            setFieldName(`Cancha Sintética #${location.state.fieldId}`)
        }
    }, [location.state])

    const dates = Array.from({ length: 7 }, (_, i) => {
        const d = new Date()
        d.setDate(d.getDate() + i)
        return {
            day: d.toLocaleDateString('es-ES', { weekday: 'short' }),
            date: d.getDate(),
            fullDate: d
        }
    })

    const timeSlots = [
        "08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"
    ]

    return (
        <div className="space-y-6">
            <header className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full" onClick={() => window.history.back()}>
                    <ChevronLeft className="w-6 h-6" />
                </Button>
                <div>
                    <h1 className="text-xl font-bold text-white">Reservar</h1>
                    <p className="text-primary text-sm font-medium">{fieldName}</p>
                </div>
            </header>

            {/* Calendar Strip */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-white flex items-center">
                        <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
                        Noviembre 2025
                    </h2>
                    <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronLeft className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronRight className="w-4 h-4" /></Button>
                    </div>
                </div>

                <div className="flex space-x-3 overflow-x-auto pb-2 no-scrollbar">
                    {dates.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedDate(item.date)}
                            className={cn(
                                "flex flex-col items-center justify-center min-w-[60px] h-20 rounded-2xl transition-all duration-200 border border-transparent",
                                selectedDate === item.date
                                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            <span className="text-xs font-medium uppercase">{item.day}</span>
                            <span className="text-xl font-bold">{item.date}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Time Slots */}
            <section>
                <h2 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Horarios Disponibles
                </h2>
                <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                        <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={cn(
                                "py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 border",
                                selectedTime === time
                                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                                    : "bg-white/5 text-gray-300 border-white/5 hover:border-white/20 hover:bg-white/10"
                            )}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </section>

            {/* Summary Card */}
            {selectedTime && (
                <div className="fixed bottom-20 left-0 right-0 p-4 z-20">
                    <div className="container max-w-md mx-auto">
                        <Card className="bg-gray-800/90 backdrop-blur-xl border-primary/20 shadow-2xl p-4 flex justify-between items-center animate-in slide-in-from-bottom-10 fade-in">
                            <div>
                                <p className="text-gray-400 text-xs">Total a pagar</p>
                                <p className="text-2xl font-bold text-white">$80.000</p>
                            </div>
                            <Button size="lg" className="px-8">Confirmar</Button>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    )
}
