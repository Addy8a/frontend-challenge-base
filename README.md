# 🚀 Frontend Challenge: User Directory Service

¡Hola! Gracias por tu interés en unirte a nuestro equipo. Este reto está diseñado para que demuestres tus habilidades con nuestro stack principal: **React, TypeScript y Material UI (MUI)**.

Queremos ver no solo qué tan bien programas, sino cómo tomas decisiones técnicas y cómo cuidas los detalles.

---

## 🎯 El Objetivo
Construir una aplicación que consulte una lista de usuarios de una API pública y los presente en una interfaz limpia, profesional y responsiva.

## 🛠️ Stack Técnico
* **Framework:** React (Vite)
* **Lenguaje:** TypeScript
* **Gestor de paquetes:** `pnpm`
* **UI Library:** Material UI (MUI) v5+
* **API:** [JSONPlaceholder - Users](https://jsonplaceholder.typicode.com/users)

---

## 📝 Tareas a realizar

### 1. Lista de Usuarios
* Consumir los datos de la API al cargar la aplicación.
* Renderizar los usuarios usando **MUI Table** o una cuadrícula de **Cards**.
* Datos mínimos a mostrar: `Nombre`, `Username` y `Email`.

### 2. Detalle de Usuario
* Al interactuar con un usuario, abrir un componente **Dialog (Modal)** o un **Drawer** de MUI.
* Mostrar información extendida: `Ciudad`, `Empresa` y `Teléfono`.

### 3. Personalización y Estilo (MUI Deep Dive)
* Aplicar estilos personalizados en encabezados o cards mediante la propiedad `sx`.
* **Requisito:** Crear al menos un componente estilizado utilizando la utilidad `styled()` de MUI (por ejemplo, un botón custom o un contenedor con efectos hover).

### 4. Filtro (Plus) 🌟
* Implementar un `TextField` que permita filtrar la lista por nombre en tiempo real.

---

## 📋 ¿Qué evaluaremos?

| Criterio | Lo que buscamos |
| :--- | :--- |
| **Fundamentos** | Uso correcto de hooks (`useEffect`, `useState`). |
| **TypeScript** | Tipado estricto de la respuesta de la API y de las props. |
| **Dominio de MUI** | Elección correcta de componentes y manejo de su sistema de estilos. |
| **Manejo de Git** | Commits descriptivos y flujo de trabajo organizado. |
| **Autonomía** | Capacidad de investigar la documentación oficial para resolver bloqueos. |
| **Limpieza** | Código legible, nombres claros y sin errores en consola. |

---

## ⚙️ Setup del Proyecto

Este repositorio ya viene pre-configurado para ahorrarte tiempo. Sigue estos pasos:

1.  **Clonar y preparar:**
    ```bash
    pnpm install
    ```
2.  **Ejecutar en desarrollo:**
    ```bash
    pnpm start
    ```
3.  **Git Flow:**
    * Crea una rama con tu nombre: `feat/nombre-apellido`.
    * Sigue el estándar de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

---

## ⏱️ Entrega

* **Tiempo estimado:** 2 a 4 horas.
* **Plazo máximo:** 48 horas desde la recepción del reto.
* **Formato:** Envía el enlace de tu repositorio (asegúrate de que sea público o danos acceso) o un archivo `.zip` excluyendo la carpeta `node_modules`.

¡Mucho éxito, estamos ansiosos por ver tu solución! 🚀
