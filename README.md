# 💸 Digital Money - Desafío Profesional Front-End

Este proyecto es parte del Desafío Profesional de **Digital House** para obtener el certificado de **Front End Specialist**.

**Digital Money** es una aplicación de billetera virtual desarrollada con **Next.js**, que permite a los usuarios gestionar sus finanzas personales, realizar pagos de servicios y utilizar su billetera desde cualquier dispositivo (escritorio, tablet o móvil).

---

## 🚀 Tecnologías Utilizadas

- **Next.js**
- **React**
- **CSS Modules**
- **html2pdf** (para exportar comprobantes en PDF)

---

## ⚙️ Instalación

1. Cloná el repositorio.
2. Instalá las dependencias con `npm install` o `yarn install`.
3. Configurá el archivo `.env.local` con los valores necesarios para la conexión a la API.
4. Ejecutá la app con `npm run dev` o `yarn dev`.

---

## 🧩 Funcionalidades por Sprint

### 🏁 Sprint 1: Página de inicio, registro, inicio y cierre de sesión

#### Objetivo:
Desarrollar una página de inicio que muestre los servicios de la billetera digital, con funcionalidades de registro, inicio y cierre de sesión.

#### Requerimientos:
- **Página de inicio**:
  - Mostrar los servicios ofrecidos.
  - Enlaces al registro, inicio y cierre de sesión.
- **Funcionalidades**:
  - Formulario de registro con validación.
  - Formulario de login con validación.
  - Opción de cierre de sesión.
  - Manejo de errores desde la API.

---

### 🧑‍💼 Sprint 2: Mi Perfil, Medios de Pago e Ingreso de Dinero

#### Objetivo:
Agregar páginas protegidas para gestionar el perfil del usuario, medios de pago y realizar ingresos de dinero.

#### Requerimientos:
- **Acceso autenticado**:
  - Solo usuarios logueados pueden acceder.
  - Uso de token en cada solicitud.
- **Páginas**:
  - **Mi Perfil**: Visualización y edición de datos personales.
  - **Medios de Pago**: Gestión de tarjetas o cuentas bancarias.
  - **Ingreso de Dinero**: Cargar saldo desde medios de pago asociados.

---

### 💳 Sprint 3: Pago de Servicios y Dashboard

#### Objetivo:
Permitir a los usuarios pagar servicios desde su billetera y visualizar su actividad financiera.

#### Requerimientos:
- **Pago de servicios**:
  - Lista de servicios (ej: luz, agua, teléfono).
  - Selección del servicio y método de pago (saldo o medios registrados).
  - Validación y confirmación de transacción.
  - Comprobante con monto, servicio y fecha.
- **Dashboard**:
  - Mostrar saldo actual.
  - Listado de transacciones recientes con filtros.

---

### 📊 Sprint 4: Actividad del Usuario

#### Objetivo:
Implementar una página donde el usuario pueda ver y filtrar todos sus movimientos financieros.

#### Requerimientos:
- **Acceso autenticado**:
  - Validación del token en cada solicitud.
- **Visualización**:
  - Lista cronológica de movimientos (ingresos y egresos).
  - Colores para distinguir ingresos (verde) y egresos (rojo).
- **Filtros y búsqueda**:
  - Por tipo, fecha, monto o palabra clave.
  - Filtros avanzados por categoría (servicios, recargas, transferencias).

---

## 🌐 Deploy

La aplicación está desplegada en **Vercel** y se conecta a una API provista por Digital House (documentada en Swagger).

## 📝 Notas

- Asegurate de tener un archivo `.env.local` con las variables necesarias.
- Todas las funcionalidades requieren conexión con la API backend.
- El proyecto está pensado para escalar y mantener una buena experiencia en múltiples dispositivos.
