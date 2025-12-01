# Canchas Sintéticas - Sistema de Gestión

Sistema completo para la gestión y administración de canchas sintéticas con interfaces separadas para jugadores y administradores.

## 🚀 Características

### Para Jugadores (Mobile-First)
- 📱 Dashboard con canchas destacadas
- 📅 Sistema de reservas con calendario interactivo
- 👤 Perfil de usuario con estadísticas
- 🔐 Autenticación segura

### Para Administradores (Desktop)
- 📊 Dashboard con métricas y analytics
- 🗓️ Gestión de horarios y disponibilidad
- 👥 Administración de usuarios
- 🔐 Control de acceso basado en roles

## 🛠️ Tecnologías

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS v3
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Context
- **Language**: TypeScript

## 📦 Instalación

1. Clonar el repositorio
   ```bash
   git clone <repository-url>
   cd CanchasSinteticas
   ```

2. Instalar dependencias
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo
   ```bash
   npm run dev
   ```

4. Abrir [http://localhost:5173](http://localhost:5173)

## 🔑 Usuarios de Prueba

### Jugador
- Email: `player@test.com`
- Password: `password`
- Rol: Jugador

### Administrador
- Email: `admin@test.com`
- Password: `password`
- Rol: Admin

## 📝 Scripts Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Preview del build de producción
npm run lint     # Ejecutar linter
```

## 🌿 Configuración de GitHub

### Configurar Protecciones de Rama `main`

1. Ve a **Settings** → **Branches** → **Add rule**
2. Branch name pattern: `main`
3. Configurar las siguientes opciones:

   ✅ **Require a pull request before merging**
   - Require approvals: **2**
   - Dismiss stale pull request approvals when new commits are pushed
   
   ✅ **Require status checks to pass before merging**
   - Require branches to be up to date before merging
   - Status checks: `build-and-test`
   
   ✅ **Require conversation resolution before merging**
   
   ✅ **Do not allow bypassing the above settings**
   
   ✅ **Restrict who can push to matching branches**
   - Solo administradores y maintainers

### Configurar Releases Automáticos

1. Ve a **Settings** → **Actions** → **General**
2. Workflow permissions: **Read and write permissions**
3. Allow GitHub Actions to create and approve pull requests: ✅

## 🤝 Contribuir

Por favor lee [CONTRIBUTING.md](./CONTRIBUTING.md) para detalles sobre nuestro código de conducta y el proceso para enviar pull requests.

### Flujo de Trabajo
1. Fork el proyecto
2. Crear una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'feat: add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request
6. Esperar **2 aprobaciones**
7. Merge después de que los checks pasen

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Equipo

- **Desarrollo**: Edwin Valencia

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias, por favor abre un [issue](../../issues).

---

⚽ Hecho con pasión para la comunidad de fútbol
