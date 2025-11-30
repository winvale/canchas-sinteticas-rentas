import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { PlayerLayout } from "./layouts/PlayerLayout"
import { PlayerHome } from "./pages/player/PlayerHome"
import { PlayerBooking } from "./pages/player/PlayerBooking"
import { PlayerProfile } from "./pages/player/PlayerProfile"

import { AdminLayout } from "./layouts/AdminLayout"
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import { AdminSchedule } from "./pages/admin/AdminSchedule"
import { AdminUsers } from "./pages/admin/AdminUsers"

import { AuthLayout } from "./layouts/AuthLayout"
import { Login } from "./pages/auth/Login"
import { Register } from "./pages/auth/Register"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Auth Routes */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/auth/login" replace />} />

          {/* Protected Player Routes */}
          <Route path="/player" element={
            <ProtectedRoute allowedRole="player">
              <PlayerLayout />
            </ProtectedRoute>
          }>
            <Route index element={<PlayerHome />} />
            <Route path="book" element={<PlayerBooking />} />
            <Route path="profile" element={<PlayerProfile />} />
          </Route>

          {/* Protected Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute allowedRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="schedule" element={<AdminSchedule />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
