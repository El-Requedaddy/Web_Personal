---
title: Optimización Evolutiva del Viajante (TSP)
link: tsp-evolutionary-optimization
catalog: true
date: 2026-02-25
description: Implementación y análisis de algoritmos Genéticos y Evolutivos Diferenciales para el Problema del Viajante de Comercio (TSP), comparando operadores OX2 y MOC.
cover: /img/cover/6.webp
tags:
  - C++
  - Inteligencia Artificial
  - Algoritmos Genéticos
  - Optimización
  - Metaheurísticas
  - TSP
  - Proyecto Universitario
categories:
  - Proyectos
sticky: false
---

Este proyecto documenta la implementación y análisis experimental de algoritmos metaheurísticos para resolver el **Problema del Viajante de Comercio (TSP)**. Fue desarrollado por **Carlos Requena Doña** y **Yessin Mohamed** como parte de una práctica universitaria.

El objetivo principal es comparar el desempeño de **Algoritmos Genéticos (AG)** y **Algoritmos Evolutivos Diferenciales (EDA/EDB)** utilizandon distintas configuraciones y operadores de cruce.

## 🧠 Algoritmos y Problema

El problema consiste en encontrar la ruta más corta que visite un conjunto de ciudades exactamente una vez y regrese al origen. La distancia entre puntos se calcula mediante la fórmula de distancia euclídea.

El proyecto implementa dos tipos principales de algoritmos:
1.  **Algoritmo Genético (Generacional)**: Simula la evolución natural con una población de individuos (rutas).
2.  **Algoritmo Evolutivo Diferencial**: Utiliza operadores de mutación diferencial basados en permutaciones.

### Componentes Clave

-   **FileLoader (Singleton)**: Gestiona la carga de coordenadas de ciudades desde archivos y los parámetros de configuración, evitando "números mágicos" y permitiendo fácil experimentación.
-   **Representación de Soluciones**: Cada individuo de la población representa una ruta (vector de ciudades).
-   **Función de Fitness**: Se calcula como la distancia total del recorrido. El objetivo es minimizar este coste.

## 🧬 Algoritmo Genético

El Algoritmo Genético Generacional sigue un ciclo clásico de selección, cruce y mutación:

1.  **Selección**: Se utiliza selección por torneo para elegir a los padres.
2.  **Cruce**: Se implementan operadores como **OX2** (Order Crossover 2) y **MOC** (Maximal Preservative Crossover).
3.  **Elitismo**: Se preservan los mejores individuos (élites) para la siguiente generación, asegurando que la calidad de la solución no disminuya.
4.  **Reemplazo**: La nueva generación sustituye completamente a la antigua.

## 🧪 Evolutivo Diferencial

El algoritmo Diferencial utiliza una estrategia de recombinación ternaria:
-   Selecciona un "padre", dos individuos aleatorios y un individuo "objetivo".
-   Aplica operadores de mutación diferencial (EDA/EDB) para generar nuevas soluciones.
-   Los nuevos individuos reemplazan a los antiguos solo si mejoran el fitness (coste).

## 📊 Experimentos y Resultados

Se realizaron pruebas exhaustivas utilizando 5 semillas aleatorias distintas y múltiples configuraciones de parámetros (tamaño de población, número de élites, probabilidades).

### Análisis Comparativo

-   **MOC vs OX2**: El operador **MOC** mostró en general mejores resultados que el OX2, especialmente en convergencia temprana. MOC tiende a mejorar muy rápido al inicio y luego se estabiliza, mientras que OX2 mantiene una mejora más constante.
-   **EDA vs EDB**: La estrategia de selección **EDA** demostró ser superior a EDB tanto en media de resultados como en desviación típica.
-   **Rendimiento General**: El MOC superó significativamente al EDA en las pruebas realizadas, logrando mejores costes promedio.

### Conclusiones

El comportamiento de los algoritmos sugiere que **MOC es ideal para escenarios con pocas iteraciones** debido a su rápida convergencia inicial, mientras que **OX2 podría ser más robusto en ejecuciones muy largas** donde se requiera mejora constante sin estancamiento prematuro.

---
*Proyecto desarrollado para la asignatura de Metaheurísticas.*
