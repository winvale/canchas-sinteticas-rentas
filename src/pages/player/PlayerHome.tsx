import { Button } from "../../components/ui/Button"
import { Card } from "../../components/ui/Card"
import { MapPin, Star, Clock } from "lucide-react"

export function PlayerHome() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <header className="flex justify-between items-center py-2">
                <div>
                    <h1 className="text-2xl font-bold text-white">Hola, Edwin 👋</h1>
                    <p className="text-gray-400 text-sm">¿Listo para jugar?</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px]">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                        <span className="font-bold text-white">EV</span>
                    </div>
                </div>
            </header>

            {/* Featured Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=1000"
                    alt="Featured Field"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-2 py-1 bg-primary text-white text-xs font-bold rounded-md mb-2 inline-block">
                        Popular
                    </span>
                    <h2 className="text-xl font-bold text-white">Cancha El Campín</h2>
                    <div className="flex items-center text-gray-300 text-sm mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>Bogotá, Central</span>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 flex flex-col items-center justify-center space-y-2 hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Clock className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-white">Historial</span>
                </Card>
                <Card className="p-4 flex flex-col items-center justify-center space-y-2 hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                        <Star className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-white">Favoritos</span>
                </Card>
            </div>

            {/* Recent Fields List */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-white">Canchas Disponibles</h3>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-light">Ver todo</Button>
                </div>

                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="flex p-3 space-x-4 hover:bg-white/5 transition-colors cursor-pointer">
                            <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                <img
                                    src={`https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80&w=300&text=${i}`}
                                    alt="Field"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 py-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-white">Cancha Sintética #{i}</h4>
                                    <div className="flex items-center text-yellow-400 text-xs font-bold">
                                        <Star className="w-3 h-3 mr-1 fill-current" />
                                        4.8
                                    </div>
                                </div>
                                <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                                    Cancha profesional de fútbol 5, iluminación LED y vestuarios.
                                </p>
                                <div className="mt-3 flex justify-between items-center">
                                    <span className="text-primary font-bold text-sm">$80.000/h</span>
                                    <Button size="sm" className="h-8 px-3 text-xs">Reservar</Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}
