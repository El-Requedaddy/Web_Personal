---
title: Sistema de Gestión de Inventario
link: inventory-management-system
catalog: true
date: 2024-06-15 00:00:00
description: Sistema completo de gestión de inventario desarrollado con React y Node.js, con autenticación JWT y panel administrativo.
cover: /Web_Personal/img/cover/1.webp
tags:
  - React
  - Node.js
  - TypeScript
  - PostgreSQL
  - Express
  - JWT
categories:
  - Proyectos
sticky: false
---

Sistema de gestión de inventario desarrollado para optimizar el control de stock y la administración de productos en tiempo real.

## 🚀 Características Principales

- **Dashboard Interactivo**: Visualización en tiempo real del estado del inventario
- **Gestión de Productos**: CRUD completo con validación de datos
- **Sistema de Roles**: Autenticación y autorización basada en roles (Admin, Usuario, Visor)
- **Reportes**: Generación de reportes en PDF y Excel
- **Alertas**: Notificaciones automáticas de stock bajo
- **Responsive**: Interfaz adaptable a todos los dispositivos

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** con TypeScript
- **Tailwind CSS** para estilos
- **React Query** para gestión de estado del servidor
- **Recharts** para gráficos y visualizaciones

### Backend
- **Node.js** con Express
- **PostgreSQL** como base de datos
- **Prisma ORM** para modelado de datos
- **JWT** para autenticación
- **Zod** para validación de esquemas

### DevOps
- **Docker** para containerización
- **GitHub Actions** para CI/CD
- **Nginx** como reverse proxy

## 📸 Capturas de Pantalla

### Dashboard Principal
![Dashboard](/Web_Personal/img/projects/inventory-dashboard.png)

### Gestión de Productos
![Productos](/Web_Personal/img/projects/inventory-products.png)

## 💡 Desafíos y Soluciones

### Optimización de Consultas
**Problema**: Las consultas a la base de datos eran lentas con más de 10,000 productos.

**Solución**: Implementé paginación del lado del servidor, índices en PostgreSQL y cacheo con Redis, reduciendo el tiempo de respuesta de 3s a 200ms.

### Sincronización en Tiempo Real
**Problema**: Múltiples usuarios editando inventario simultáneamente causaba conflictos.

**Solución**: Implementé WebSockets con Socket.io para actualizaciones en tiempo real y optimistic locking para prevenir condiciones de carrera.

## 📊 Resultados

- ✅ Reducción del 40% en tiempo de procesamiento de inventario
- ✅ 99.9% de uptime en producción
- ✅ Más de 50 usuarios concurrentes sin degradación de performance
- ✅ Adoptado por 3 empresas locales

## 🔗 Enlaces

- **GitHub**: [github.com/tu-usuario/inventory-system](https://github.com/tu-usuario/inventory-system)
- **Demo en Vivo**: [demo.inventory-system.com](https://demo.inventory-system.com)
- **Documentación**: [docs.inventory-system.com](https://docs.inventory-system.com)

## 🎓 Aprendizajes Clave

Este proyecto me permitió:
- Profundizar en arquitecturas escalables con microservicios
- Dominar patrones de autenticación y autorización
- Mejorar habilidades de optimización de bases de datos
- Implementar CI/CD desde cero
- Trabajar con metodologías ágiles en equipo

## 📝 Código Destacado

```typescript
// Sistema de notificaciones de stock bajo
async function checkLowStockProducts() {
  const lowStockProducts = await prisma.product.findMany({
    where: {
      quantity: {
        lte: prisma.raw('reorder_point')
      }
    },
    include: { category: true }
  });

  for (const product of lowStockProducts) {
    await sendNotification({
      type: 'LOW_STOCK_ALERT',
      productId: product.id,
      message: `El producto ${product.name} tiene stock bajo (${product.quantity} unidades)`
    });
  }
}
```

---

*Desarrollado entre Marzo - Junio 2024 | Cliente: Empresa Retail XYZ*
