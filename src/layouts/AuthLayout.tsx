import { Outlet } from "react-router-dom"

export function AuthLayout() {
    return (
        <div className="min-h-screen bg-gray-900 flex">
            {/* Left Side - Image/Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply z-10" />
                <img
                    src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80&w=2000"
                    alt="Soccer Field"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 flex flex-col justify-center px-12 text-white">
                    <h1 className="text-5xl font-bold mb-6">Gestiona tu pasión</h1>
                    <p className="text-xl text-gray-200 max-w-md">
                        La plataforma premium para reservar y administrar canchas sintéticas.
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
