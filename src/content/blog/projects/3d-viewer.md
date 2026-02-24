---
title: 3D Viewer — Motor de Renderizado OpenGL
link: 3d-viewer
catalog: true
date: 2026-02-24 00:00:00
description: Motor de renderizado 3D desarrollado en C++ con OpenGL. Soporta carga de modelos con Assimp, iluminación Phong, normal mapping, texturas y una interfaz interactiva con ImGUI.
cover: /Web_Personal/img/cover/3.webp
tags:
  - C++
  - OpenGL
  - GLFW
  - ImGUI
  - Assimp
  - GLSL
  - GLM
  - 3D Graphics
categories:
  - Proyectos
sticky: false
---

Motor de renderizado 3D construido desde cero en C++ sobre OpenGL. Permite cargar modelos en múltiples formatos mediante Assimp, aplicar distintos tipos de iluminación y materiales, renderizar con normal mapping y controlar la cámara de forma interactiva. Toda la configuración de la escena se gestiona en tiempo real a través de una interfaz con ImGUI.

## 🎥 Demo en vídeo

[Ver demostración en Google Drive](https://drive.google.com/file/d/1zrzqGFnW4ZPExZnvLs_mIXGnygYp2qX0/view?usp=sharing)

## 🚀 Características Principales

- **Carga de modelos** en múltiples formatos mediante la librería Assimp
- **Iluminación Phong** con luces puntuales y direccionales configurables
- **Normal mapping** para detalle de superficie sin geometría adicional
- **Modos de renderizado**: relleno, alambre y relleno con mapeado normal
- **Renderizado por textura o material** seleccionable en tiempo real
- **Interfaz interactiva** con menús desplegables (ImGUI)
- **Cámara libre** con movimiento WASD + ratón, panorámica y cabeceo

## 🛠️ Stack Tecnológico

- **C++** como lenguaje principal
- **OpenGL** como API gráfica
- **GLFW** para la gestión de ventana e input
- **GLM** para matemáticas vectoriales y de matrices
- **Assimp** para la carga e importación de modelos 3D
- **ImGUI** para la interfaz de usuario interactiva
- **GLSL** para los shaders de vértice y fragmento

## 🏗️ Arquitectura

El diseño sigue un esquema orientado a objetos con responsabilidades bien delimitadas. El diagrama de clases resume las relaciones principales:

```
Renderer  ◆── ShaderHandler   (composición: Renderer crea y posee ShaderHandler)
Renderer  ◆── Cámara
Renderer  ──▶ Luz (N luces en vector)
Renderer  ──▶ GestorModelos
GestorModelos  ◆── Modelo [1..N]
Modelo         ◆── MallaModelo [1..N]
FileLoader  · · ▶  Renderer   (uso puntual para carga de archivos)
```

![Relaciones de clases](/img/projects/1.webp)

### Renderer
Clase central del sistema. Gestiona el ciclo de renderizado, los shaders, la cámara, los modelos y las luces. Es un Singleton (`GetInstancia()`), lo que permite acceder a él desde cualquier punto de la aplicación (incluyendo los callbacks de ImGUI e input).

### ShaderHandler
Composición interna de `Renderer`. Se encarga de:
- Compilar y enlazar los programas GLSL (`createShaderProgram`)
- Inicializar y gestionar VAOs/VBOs (`InicializacionArraysShaders`)
- Comprobar errores de compilación de shaders (`comprobarCompilacion`)
- Gestionar subrutinas de fragmento para alternar entre modos de renderizado

### Cámara
Almacena las matrices de vista y proyección (`glm::mat4`) y expone métodos para cada tipo de movimiento: traslación (`movimientoArriba`, `movimientoDerecha`), panorámica (`panoramica`) y cabeceo (`cabeceo`). Procesa el input de ratón y teclado a través de `procesarMovimiento`.

### GestorModelos → Modelo → MallaModelo
Jerarquía de composición en tres niveles:

| Clase | Responsabilidad |
|---|---|
| **GestorModelos** | Mantiene un vector de punteros a `Modelo`, asigna IDs de textura y delega el renderizado |
| **Modelo** | Carga el modelo via Assimp, almacena mallas, matriz de modelado, textura e ID de shader |
| **MallaModelo** | Contiene los datos de GPU: VAO, VBO, EBO y los vértices/índices de cada malla |

### Luz
Representa una fuente de luz en la escena. El tipo se diferencia mediante el enum `TipoLuz` y cada tipo tiene su propio constructor. Almacena posición, dirección, componentes ambiental/difusa/especular e indicador de habilitación.

## 💡 Interfaz ImGUI

La interfaz se construye en el `main` con menús desplegables que permiten operar la escena sin tocar el código:

```cpp
ImGui::SetNextWindowSize(ImVec2(300, 140));
if (ImGui::Begin("Menú Principal", NULL, ImGuiWindowFlags_NoCollapse)) {
    if (ImGui::BeginMenu("Añadir")) {
        if (ImGui::MenuItem("Añadir luz puntual"))       popupLuzPuntualAbierto = true;
        if (ImGui::MenuItem("Añadir luz direccional"))   popupLuzDireccionalAbierto = true;
        if (ImGui::MenuItem("Añadir Modelo"))            popupAnadirModelo = true;
        ImGui::EndMenu();
    }
    if (ImGui::BeginMenu("Cambiar color modelos")) {
        if (ImGui::MenuItem("Textura"))   Renderer::GetInstancia()->setTipoCalculoColorTextura();
        if (ImGui::MenuItem("Material"))  Renderer::GetInstancia()->setTipoCalculoColorMaterial();
        ImGui::EndMenu();
    }
    if (ImGui::BeginMenu("Cambiar modo de visualización")) {
        if (ImGui::MenuItem("Alambre"))                    Renderer::GetInstancia()->setTipoRenderizadoAlambre();
        if (ImGui::MenuItem("Relleno"))                    Renderer::GetInstancia()->setTipoRenderizadoRelleno();
        if (ImGui::MenuItem("Relleno con mapeado normal")) Renderer::GetInstancia()->setTipoRenderizadoRellenoMapeadoNormal();
        ImGui::EndMenu();
    }
}
```

Las acciones de popup para añadir luces o modelos propagan los datos directamente a `Renderer` via su instancia Singleton.

## 🔦 Normal Mapping

El normal mapping se implementa a nivel de shader transformando las normales al espacio tangente. Los cambios afectan a:

1. **Cargador de modelos (Assimp)**: obtención de atributos tangenciales junto a vértices, normales y UVs
2. **`Renderer::dibujoModeloMalla`**: paso de las variables tangentes al shader de vértices
3. **Shaders GLSL**: cálculo de iluminación en espacio tangente usando la textura de normales

El sistema comprueba en `GestorModelos::creaModelo` que la ruta de textura de normales no esté vacía antes de cargarla, ya que la textura difusa y el mapa de normales son independientes:

```cpp
void PAG::GestorModelos::creaModelo(const char* path, glm::mat4 matrizModelado,
    std::string rutaTextura, std::string rutaNormal, float brillo,
    glm::vec3 colorAmbiental, glm::vec3 componenteDifuso, glm::vec3 exponenteEspecular)
{
    Modelos* modelo = new Modelos(path, matrizModelado, brillo,
                                  colorAmbiental, componenteDifuso, exponenteEspecular);
    if (!rutaTextura.empty()) {
        modelo->setIdTextura(idTexturaModelos == 1 ? 2 : idTexturaModelos);
        cargarTextura(rutaTextura);
    }
    if (!rutaNormal.empty()) {
        modelo->setIdTexturaNormal(idTexturaModelos);
        cargarTextura(rutaNormal);
    }
    modelosEscena.push_back(modelo);
}
```

## ⌨️ Controles

| Tecla / Acción | Efecto |
|---|---|
| `W` | Movimiento arriba |
| `S` | Movimiento abajo |
| `A` | Movimiento derecha |
| `D` | Movimiento izquierda |
| Click izq. + ratón | Rotación de cámara libre |
| `P` | Panorámica izquierda |
| `O` | Panorámica derecha |
| `C` | Cabeceo a la izquierda |
| `X` | Cabeceo a la derecha |

> Las teclas de movimiento solo responden mientras el botón izquierdo del ratón esté pulsado, evitando así desplazamientos accidentales al escribir en los popups de ImGUI.

## 🔗 Repositorio

- **GitHub**: [El-Requedaddy/3D_Viewer](https://github.com/El-Requedaddy/3D_Viewer)
- **Main (ImGUI + input)**: [`program/main.cpp`](https://github.com/El-Requedaddy/3D_Viewer/blob/master/program/main.cpp)
- **Renderer (normal mapping, L180)**: [`program/Renderer.cpp`](https://github.com/El-Requedaddy/3D_Viewer/blob/master/program/Renderer.cpp)

## 🎓 Aprendizajes Clave

Este proyecto me permitió:
- Comprender el pipeline gráfico completo de OpenGL (VAO/VBO/EBO, compilación de shaders, draw calls)
- Implementar un sistema de iluminación Phong con soporte multi-luz en GLSL
- Aplicar **normal mapping** en espacio tangente desde cero
- Integrar **ImGUI** para construir interfaces interactivas sobre OpenGL sin framework adicional
- Diseñar una arquitectura orientada a objetos con composición y Singleton en C++
- Gestionar recursos GPU (texturas, buffers) con IDs y un sistema de Object Pool simplificado
