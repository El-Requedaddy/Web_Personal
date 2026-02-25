---
title: The Speedrunner
link: the-speedrunner
catalog: true
date: 2026-02-25
description: Un videojuego tipo Speedrun desarrollado en Unity donde el objetivo es completar niveles lo más rápido posible con mecánicas avanzadas de movimiento.
cover: /img/cover/5.webp
tags:
  - Unity
  - C#
  - Game Development
  - Speedrun
  - 3D
  - Proyecto Universitario
categories:
  - Proyectos
sticky: false
---

**The Speedrunner** es un videojuego de plataformas en primera persona desarrollado en Unity, enfocado en la velocidad y la precisión. El objetivo principal es completar niveles en el menor tiempo posible, superando récords personales y compitiendo contra otros jugadores.

Este proyecto fue desarrollado en colaboración por **Carlos Requena Doña** y **Yessin Mohamed**.

## 🎮 Concepto y Gameplay

El juego se inspira en títulos como *"Warstride Challenges"*, buscando una experiencia fluida y frenética. El jugador controla a "The Bean", un personaje diseñado para moverse a gran velocidad por entornos tridimensionales.

### Características Principales

- **Sistema de Movimiento Avanzado**: Basado en físicas cinemáticas para una sensación de fluidez total.
- **Mecánicas de Combate Integradas**: Disparar a dianas y enemigos es parte fundamental del avance en los niveles.
- **Sistema de Puntuación**: Basado en el tiempo, fomentando la rejugabilidad y la optimización de rutas ("Speedrunning").
- **Dificultad Progresiva**: Niveles diseñados para desafiar las habilidades del jugador.

## 🏃‍♂️ Mecánicas de Movimiento

El núcleo del juego reside en su sistema de movimiento, que permite encadenar acciones para mantener y aumentar la velocidad:

1.  **Wall Run**: Permite correr por las paredes para alcanzar zonas inaccesibles. Al saltar desde una pared, se obtiene un impulso extra.
2.  **Doble Salto**: Capacidad de realizar un segundo salto en el aire para corregir trayectorias o alcanzar mayor altura.
3.  **Dash**: Un impulso rápido hacia adelante que aumenta drásticamente la velocidad momentáneamente (con un cooldown de 2 segundos).
4.  **Disparo**: Mecánica esencial para abrir puertas o activar mecanismos al disparar a dianas específicas.

## 🌍 Diseño de Niveles

El juego cuenta con una estructura de niveles diseñada para la optimización de rutas. Aunque el mapa es estático, la rejugabilidad surge de encontrar la secuencia de movimientos perfecta.

- **Nivel 1**: Introduce las mecánicas básicas y puertas bloqueadas que requieren precisión de disparo.
- **Nivel 2**: Aumenta la complejidad con caminos alternativos desbloqueables mediante dianas, permitiendo atajos para reducir el tiempo final.

## 🛠️ Arquitectura Técnica

El proyecto fue construido en Unity utilizando una arquitectura modular:

- **Character Controller Kinemático**: Implementación personalizada de físicas para un control preciso del movimiento.
- **Input System**: Gestión centralizada de entradas del jugador para soportar reasignación de teclas.
- **Game Manager (Singleton)**: Controla el estado global del juego (Jugando, Pausa, Victoria, Game Over) y el sistema de puntuación.
- **Persistencia de Datos**: Sistema de guardado JSON para almacenar récords y progreso de desbloqueo de niveles.
- **Sistema de Audio**: Gestión de eventos para efectos de sonido y música dinámica.

## 📦 Recursos y Créditos

El desarrollo se apoyó en assets de **Synty Studios (Polygon)** para el apartado visual low-poly, junto con otros paquetes para efectos de partículas y skyboxes, permitiendo al equipo centrarse en la programación de mecánicas y diseño de niveles único.

---
*Proyecto desarrollado como parte del portafolio de desarrollo de videojuegos.*
