---
title: Optimización de Flujo en Planta (QAP)
link: plant-flow-optimization
catalog: true
date: 2026-02-25
description: Implementación y análisis de algoritmos Greedy, Búsqueda Local, Búsqueda Tabú y Multiarranque para resolver el problema de asignación cuadrática (QAP) en una cadena de montaje.
cover: /img/cover/7.webp
tags:
  - C++
  - Inteligencia Artificial
  - Optimización
  - Metaheurísticas
  - Algoritmo Greedy
  - Búsqueda Tabú
  - QAP
  - Proyecto Universitario
categories:
  - Proyectos
sticky: false
---

Este proyecto aborda el problema de optimización de una cadena de montaje para una fábrica (basado en un caso de estudio de FORD), buscando la distribución óptima de departamentos para minimizar el coste de flujo de materiales. Desarrollado por **Carlos Requena Doña** y **Yessin Mohamed** como parte de la Práctica 1 de la asignatura de Metaheurísticas.

Se implementan y comparan diversas técnicas de optimización, desde heurísticas constructivas hasta metaheurísticas avanzadas de búsqueda local.

## 🏭 Definición del Problema (QAP)

El objetivo es asignar $n$ departamentos a $n$ localizaciones para minimizar la función de coste cuadrática:

$$ 
C(S) = \sum_{i,j=1}^{n} \sum_{k,p=1}^{n} f_{ij} \cdot d_{kp} \cdot x_{ij} \cdot x_{kp} 
$$

Donde se busca minimizar el producto del flujo ($f$) de materiales entre departamentos por la distancia ($d$) entre las localizaciones asignadas.

## 🧠 Algoritmos Implementados

### 1. Algoritmo Greedy (Voraz)
Una heurística constructiva que genera una solución inicial rápida.
-   Utiliza colas de prioridad (Heaps) para ordenar flujos (mayor a menor) y distancias (menor a mayor).
-   Asigna iterativamente los departamentos con mayor flujo a las localizaciones más cercanas disponibles.

### 2. Búsqueda Local del Primer Mejor (First-Improvement)
Mejora la solución inicial explorando el vecindario mediante permutaciones (swap) de dos departamentos.
-   **Estrategia**: Acepta la primera solución vecina que mejore el coste actual.
-   **DLB (Don't Look Better)**: Implementación de un vector de bits para optimizar la búsqueda, marcando aquellos departamentos que no han generado mejoras recientemente para evitar reevaluaciones inútiles.

### 3. Búsqueda Tabú
Una metaheurística avanzada que permite escapar de óptimos locales aceptando movimientos que empeoren la solución, guiada por memorias a corto y largo plazo.
-   **Memoria a Corto Plazo**: Lista Tabú que prohíbe invertir movimientos recientes o repetir soluciones visitadas durante una "tenencia tabú".
-   **Memoria a Largo Plazo**: Frecuencia de asignación de departamentos a localizaciones para guiar la diversificación/intensificación.
-   **Oscilación Estratégica**: Alterna entre fases de **intensificación** (explotar zonas prometedoras) y **diversificación** (explorar nuevas zonas) basándose en la memoria de frecuencias.

### 4. Multiarranque (GRASP)
Combina la construcción aleatorizada con la búsqueda local para explorar múltiples regiones del espacio de soluciones.
-   **Fase Constructiva**: Un Greedy Aleatorizado (GRASP) que no siempre elige la mejor opción, sino una de las mejores 'n' opciones aleatoriamente (RCL - Restricted Candidate List).
-   **Fase de Mejora**: Aplica Búsqueda Tabú a cada solución generada, guardando la mejor solución global encontrada tras múltiples ejecuciones.

## 🛠️ Arquitectura y Diseño

-   **FileLoader (Singleton)**: Carga de matrices de flujo y distancia desde archivos, permitiendo cambiar instancias del problema sin recompilar.
-   **Representación**: Vector de enteros `v` donde `v[i]` es la localización del departamento `i`.
-   **Logging**: Sistema de registro detallado para analizar la convergencia y comportamiento de los algoritmos en cada iteración.

---
*Proyecto de optimización combinatoria implementado en C++.*
