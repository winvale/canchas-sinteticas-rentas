# Guía de Contribución

## Flujo de Trabajo Git

### Ramas
- `main` - Rama principal de producción (protegida)
- `develop` - Rama de desarrollo
- `feature/*` - Nuevas funcionalidades
- `bugfix/*` - Corrección de bugs
- `hotfix/*` - Correcciones urgentes en producción

### Proceso de Contribución

1. **Crear una rama desde `develop`**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/nombre-descriptivo
   ```

2. **Hacer commits con mensajes descriptivos**
   ```bash
   git commit -m "feat: agregar autenticación de usuarios"
   ```
   
   Formato de commits (Conventional Commits):
   - `feat:` nueva funcionalidad
   - `fix:` corrección de bug
   - `docs:` cambios en documentación
   - `style:` cambios de formato
   - `refactor:` refactorización de código
   - `test:` agregar o modificar tests
   - `chore:` tareas de mantenimiento

3. **Crear Pull Request**
   - Apuntar a la rama `develop`
   - Completar la plantilla de PR
   - Asignar al menos 2 revisores
   - Esperar las 2 aprobaciones requeridas

4. **Merge a `develop`**
   - Después de 2 aprobaciones
   - CI/CD debe estar en verde
   - Hacer squash merge para mantener historial limpio

5. **Release a `main`**
   - Crear tag de versión desde `develop`
   - Crear release en GitHub
   - Solo entonces se puede mergear a `main`

### Reglas de Protección de Rama `main`

⚠️ **IMPORTANTE**: La rama `main` está protegida con las siguientes reglas:

- ✅ Requiere **2 aprobaciones** antes de merge
- ✅ Requiere que los CI/CD checks pasen
- ✅ Solo se puede mergear mediante **releases**
- ✅ No se permiten force pushes
- ✅ Requiere ramas actualizadas antes de mergear

## Estándares de Código

### TypeScript/React
- Usar `const` y `let`, nunca `var`
- Componentes funcionales con hooks
- Props con tipos estrictos
- Nombres descriptivos

### CSS/Tailwind
- Usar utilidades de Tailwind cuando sea posible
- Clases custom en `index.css` para componentes reutilizables
- Mobile-first approach

## Testing
- Agregar tests para nuevas funcionalidades
- Mantener cobertura > 80%
- Tests unitarios y de integración

## Proceso de Release

### Versioning (Semantic Versioning)
- `MAJOR.MINOR.PATCH` (ej: `1.2.3`)
- **MAJOR**: Cambios incompatibles con versiones anteriores
- **MINOR**: Nueva funcionalidad compatible
- **PATCH**: Corrección de bugs

### Crear un Release
1. Actualizar versión en `package.json`
2. Actualizar `CHANGELOG.md`
3. Crear tag: `git tag -a v1.0.0 -m "Release v1.0.0"`
4. Push tag: `git push origin v1.0.0`
5. Crear release en GitHub desde el tag
6. Después crear PR de `develop` a `main`

## Preguntas?
Si tienes dudas, abre un issue para discusión.
