# PROMPT — REWORK COMPLETO DE LA WEB DE FORENSYS

## Contexto

Tengo una página web existente de **ForenSys**, construida con:

- `index.html`
- `style.css`
- `main.js`

Debes trabajar directamente sobre esos archivos y hacer un **rework completo de contenido, arquitectura visual y estructura de la landing page**, manteniendo la identidad visual actual de ForenSys pero adaptándola a la versión actual y real del proyecto.

NO quiero una página nueva completamente distinta.

Quiero una **evolución profesional de la web existente**, conservando lo mejor de su diseño actual:

- estética dark / tecnológica;
- azul/cyan para Vision;
- violeta para Lab;
- tipografía Inter + JetBrains Mono;
- partículas;
- grid futurista;
- tarjetas;
- animaciones reveal;
- navegación sticky;
- responsive;
- lightbox;
- aspecto de software forense / centro de operaciones tecnológico.

La web actual ya tiene una buena base visual, pero su contenido corresponde a una versión anterior de ForenSys y debe ser reemplazado.

---

# 1. NUEVA IDENTIDAD DE FORENSYS

La definición principal debe ser:

> **ForenSys es una suite modular de software orientada al apoyo de procesos de investigación judicial, criminalística, análisis digital y gestión de información investigativa.**

No presentar ForenSys como una aplicación exclusivamente de reconocimiento facial.

La arquitectura conceptual actual es:

```text
                         FORENSYS
                            │
              ┌─────────────┴─────────────┐
              │                           │
       FORENSYS VISION              FORENSYS LAB
              │                           │
       ┌──────┼──────┐             ┌──────┼──────────┐
       │      │      │             │      │          │
    Facial  Placas  Rutas        Mobile  MetaInspect Ballistics
       │      │      │                              3D
       └──────┴──────┘                         │
              │                            OSINT &
       Reporte Pericial PDF                NetTracker
```

La idea visual debe quedar extremadamente clara:

**ForenSys = Suite**

**Vision y Lab = plataformas principales**

**Las aplicaciones = herramientas especializadas dentro de cada plataforma**

---

# 2. HERO

Modificar completamente el Hero.

## Título

Usar:

> **ForenSys**

Subtítulo:

> **Suite modular para investigación judicial y análisis forense**

Descripción:

> Ecosistema tecnológico que integra visión artificial, análisis digital, inteligencia investigativa, georreferenciación y herramientas especializadas para apoyar procesos de identificación, análisis de evidencias, reconstrucción investigativa y generación de información pericial.

El CTA principal puede ser:

> **Explorar ForenSys**

El segundo:

> **Conocer la arquitectura**

---

# 3. ELIMINAR MÉTRICAS FICTICIAS DEL HERO

La página actual muestra:

- 91.8 %
- 45 ms
- 2 módulos

NO mantener estas métricas como si fueran características globales de ForenSys.

No inventar nuevos números.

No colocar:

- precisión global;
- latencia global;
- cantidad de usuarios;
- uptime;
- porcentaje de éxito;
- rendimiento;
- cantidad de investigaciones.

A menos que existan datos reales y medidos.

En lugar de métricas, utilizar elementos conceptuales como:

### 2 plataformas
Vision + Lab

### 8 aplicaciones
Cuatro en Vision y cuatro en Lab

### Modular
Arquitectura orientada a crecimiento

Esto es una descripción estructural, no una métrica de rendimiento.

---

# 4. NUEVO BLOQUE: "EL ECOSISTEMA"

Crear una sección visual inmediatamente después del Hero.

Título:

> **Un ecosistema. Múltiples capacidades.**

Texto:

> ForenSys organiza diferentes herramientas de análisis e investigación en dos plataformas principales, permitiendo abordar diferentes etapas de un proceso investigativo desde un mismo ecosistema tecnológico.

Mostrar dos grandes bloques:

## ForenSys Vision

> Plataforma orientada al análisis visual, identificación y apoyo a la investigación operativa.

Aplicaciones:

### Reconocimiento Facial
Detección y comparación de rostros mediante visión artificial.

### Reconocimiento de Placas
Detección y lectura de placas vehiculares.

### Trazador de Rutas
Mapa interactivo para representar ubicaciones y posibles trayectorias.

### Reporte Pericial
Generación de documentación PDF a partir de información y resultados del análisis.

---

## ForenSys Lab

> Plataforma orientada al análisis forense, investigación digital y herramientas especializadas.

Aplicaciones:

### ForenSys Mobile / Cloud
Extensión del ecosistema para trabajo desde dispositivos móviles y sincronización según las capacidades implementadas.

### Cyber & MetaInspect
Análisis de imágenes, metadatos y EXIF.

### Ballistics 3D
Simulación y representación tridimensional de trayectorias de proyectiles.

### OSINT & NetTracker
Investigación mediante fuentes abiertas y correlación de información pública.

---

# 5. NUEVA SECCIÓN: APLICACIONES

Crear una sección mucho más visual que la actual.

Título:

> **Aplicaciones ForenSys**

Subtítulo:

> Herramientas especializadas para diferentes etapas del proceso investigativo.

En lugar de únicamente dos tarjetas gigantes, utilizar:

- 4 tarjetas de Vision;
- 4 tarjetas de Lab.

Puede mantenerse la separación cromática:

### Vision
Cyan / azul.

### Lab
Violeta.

Cada tarjeta debe incluir:

- icono;
- nombre;
- categoría;
- descripción de 1–2 líneas;
- estado;
- opcionalmente botón “Ver módulo”.

No llenar las tarjetas de texto.

---

# 6. ESTADO DE LOS MÓDULOS

No etiquetar automáticamente todo como:

> “Disponible”

o

> “En Desarrollo”

El estado debe representar la realidad del proyecto.

Usar una taxonomía clara:

- **Implementado**
- **Prototipo**
- **En desarrollo**
- **Proyectado**

Aplicar solamente cuando se pueda determinar con seguridad.

NO inventar el estado de una aplicación.

---

# 7. FORENSYS VISION

Crear un bloque dedicado a Vision.

Título:

> **ForenSys Vision**

Subtítulo:

> Inteligencia visual para identificación y análisis operativo.

Mostrar cuatro aplicaciones:

### Reconocimiento Facial

Texto:

> Detección y comparación facial mediante técnicas de visión artificial, orientadas al apoyo de procesos de identificación.

### Reconocimiento de Placas

> Detección de vehículos y procesamiento de placas mediante visión artificial y reconocimiento de caracteres.

Si realmente usa YOLO + OCR, se puede mencionar.

### Trazador de Rutas

> Visualización cartográfica de ubicaciones y posibles recorridos para apoyar la reconstrucción de trayectorias investigativas.

### Reporte Pericial

> Consolidación de resultados y generación de informes PDF estructurados.

---

# 8. FORENSYS LAB

Crear un bloque visual equivalente para Lab.

Título:

> **ForenSys Lab**

Subtítulo:

> Análisis forense, investigación digital y simulación especializada.

Mostrar:

### Mobile / Cloud

Descripción breve y estrictamente basada en la implementación real.

### Cyber & MetaInspect

> Análisis de imágenes, metadatos técnicos y datos EXIF para apoyar el examen de evidencia digital.

### Ballistics 3D

> Entorno de simulación y representación tridimensional de trayectorias de proyectiles.

### OSINT & NetTracker

> Investigación mediante fuentes abiertas para localizar y correlacionar información disponible públicamente.

IMPORTANTE:

No presentar OSINT como acceso a información privada.

---

# 9. FLUJO DE INVESTIGACIÓN

Agregar una sección que actualmente falta o está poco desarrollada.

Título:

> **Del hallazgo al análisis**

Mostrar un flujo visual:

```text
EVIDENCIA
   ↓
CAPTURA / RECOLECCIÓN
   ↓
FORENSYS VISION
   ↓
IDENTIFICACIÓN / VEHÍCULO / UBICACIÓN
   ↓
FORENSYS LAB
   ↓
ANÁLISIS DIGITAL / OSINT / SIMULACIÓN
   ↓
CORRELACIÓN DE INFORMACIÓN
   ↓
REPORTE PERICIAL
   ↓
ANÁLISIS HUMANO
```

Usar animaciones sutiles de conectores / nodos.

Esta sección debe transmitir que ForenSys conecta etapas, no simplemente que contiene aplicaciones aisladas.

---

# 10. IMPORTANTÍSIMO: NO PRESENTAR LA IA COMO DECISIÓN FINAL

Agregar una pequeña advertencia institucional:

> **ForenSys es una herramienta de apoyo. Sus resultados deben ser interpretados y verificados por personal competente y no sustituyen el criterio profesional del investigador o perito.**

Esta advertencia debe aparecer en un bloque visual elegante, no como un texto legal enorme.

---

# 11. SECCIÓN "TECNOLOGÍA"

La actual está demasiado orientada al antiguo núcleo facial.

Mantener la sección, pero reorganizarla.

Título:

> **Tecnologías**

Subtítulo:

> Tecnologías y herramientas que sustentan el ecosistema ForenSys.

Organizar por categorías.

## Visión artificial

- OpenCV
- YuNet, si efectivamente está implementado
- Modelos de detección utilizados en reconocimiento de placas

## Inteligencia artificial / OCR

- modelos realmente utilizados;
- OCR realmente utilizado.

## Backend

- Python
- FastAPI, si continúa formando parte de la arquitectura real.

## Datos

- SQLite
- SQLAlchemy, únicamente si realmente se usa.

## Investigación digital

- Sherlock / OSINT
- ExifTool
- demás herramientas realmente integradas.

## Geoespacial

Mostrar únicamente las tecnologías efectivamente utilizadas por el Trazador de Rutas.

NO inventar un stack nuevo.

---

# 12. CORREGIR AFIRMACIONES TÉCNICAS EXAGERADAS

Eliminar o modificar textos como:

> “superando a los métodos clásicos ... en precisión”

si no existe una comparación experimental documentada.

Eliminar:

> “cadena de custodia digital completa e inviolable”

porque es una afirmación absoluta.

Eliminar:

> “Interoperabilidad total”

y sustituir por:

> “Arquitectura modular e interoperable”

si realmente corresponde.

No utilizar:

> “predicción conductual”

salvo que exista realmente un modelo funcional que realice esta tarea.

No decir:

> “ninguna imagen abandona la red interna”

a menos que esto esté técnicamente garantizado por la implementación.

---

# 13. NO MOSTRAR API REST COMO CARACTERÍSTICA GLOBAL SI NO CORRESPONDE

La web actual afirma:

> “Base de datos SQLite unificada con API REST estándar”

Revisar esto.

Si la API REST solo existe en ciertos componentes, describirla únicamente en esos componentes.

No vender ForenSys como una arquitectura centralizada con una API global si realmente funciona de manera modular/local.

---

# 14. CASOS DE USO

Reemplazar los casos antiguos.

Actualmente aparecen conceptos como:

- control de acceso;
- vigilancia;
- perfilación conductual;
- auditoría de cámaras.

Actualizar hacia:

### Identificación
Reconocimiento facial.

### Análisis vehicular
Reconocimiento de placas.

### Reconstrucción
Análisis de ubicaciones y posibles trayectorias.

### Evidencia digital
Metadatos e imágenes.

### Investigación digital
OSINT.

### Análisis especializado
Balística 3D.

### Documentación
Reportes periciales.

### Movilidad
Operación desde dispositivos soportados.

Evitar presentar capacidades que no estén implementadas.

---

# 15. NUEVA SECCIÓN: USUARIOS POTENCIALES

Crear una sección:

> **¿Dónde puede utilizarse?**

Mostrar tarjetas:

- Policía Nacional
- CTI
- SIJIN
- Laboratorios de Criminalística
- Laboratorios de Informática Forense
- Instituciones educativas
- Centros de investigación
- Empresas privadas de seguridad

Utilizar la palabra:

> **Usuarios potenciales**

No decir que estas entidades actualmente utilizan ForenSys.

---

# 16. GALERÍA

La galería actual tiene muy poco contenido.

Rediseñarla para que soporte categorías:

### Vision
- Dashboard
- Reconocimiento Facial
- Reconocimiento de Placas
- Trazador de Rutas
- Reporte Pericial

### Lab
- Mobile / Cloud
- Cyber & MetaInspect
- Ballistics 3D
- OSINT & NetTracker

### Demos
- Videos

Actualizar `GALLERY_CONFIG` de `main.js`.

No inventar imágenes.

Usar únicamente imágenes reales existentes en `/imagenes/`.

Si alguna imagen no existe, no romper la página.

Mostrar un estado elegante de:

> Captura próximamente

en lugar del placeholder técnico actual.

---

# 17. main.js

Revisar completamente `main.js`.

Actualmente la galería está estructurada solamente alrededor de:

```js
vision
lab
videos
```

Mantener el sistema de galería pero hacerlo extensible.

Idealmente:

```js
gallery = {
  vision: [...],
  lab: [...],
  demos: [...]
}
```

o una estructura equivalente.

Mantener:

- lazy loading;
- lightbox;
- reveal animation;
- tabs.

Mejorar accesibilidad.

---

# 18. ESTADÍSTICAS Y ANIMACIONES

La sección actualmente funciona con counters que hacen parecer que el sistema está mostrando métricas reales.

Revisar todas las cifras.

Eliminar las que no estén sustentadas por resultados reales.

No crear números falsos.

Puedes reemplazar los counters por:

```text
2 Plataformas
8 Aplicaciones
Modular
Escalable
```

o indicadores conceptuales equivalentes.

---

# 19. REDISEÑAR LA SECCIÓN DE "SISTEMA EN OPERACIÓN"

La sección de terminal actual muestra:

```text
ForenSys Suite v1.0 — Operational
Loaded modules: vision, lab
Uptime...
```

Esto es demasiado artificial como si fuera un sistema productivo en ejecución.

Transformarla en:

> **Arquitectura del ecosistema**

Y utilizar una terminal/canvas visual para mostrar:

```text
[ FORENSYS CORE ]

├── VISION
│   ├── FACE
│   ├── LPR
│   ├── ROUTES
│   └── REPORTS
│
└── LAB
    ├── MOBILE
    ├── METAINSPECT
    ├── BALLISTICS
    └── OSINT
```

Esto sí comunica la arquitectura real.

---

# 20. DESCARGAS

La sección actual solo presenta dos descargas grandes.

Actualizarla para mostrar:

## ForenSys Vision
Descripción + repositorio + descarga, si existe.

## ForenSys Lab
Descripción + repositorio + descarga, si existe.

Y debajo una sección:

> **Aplicaciones del ecosistema**

con enlaces individuales solamente cuando existan.

No inventar archivos `.exe`.

Si algo no tiene descarga pública, utilizar:

> Código / Repositorio

en lugar de:

> Descargar.

---

# 21. GITHUB

Mantener los enlaces reales existentes.

Usar:

```text
https://github.com/AndresGonzalezDev444/ForenSys-Vision
https://github.com/AndresGonzalezDev444/ForenSys-Lab
```

Eliminar cualquier placeholder como:

```text
https://github.com/tuusuario/...
```

del footer.

También revisar que todos los botones de GitHub apunten a repositorios reales.

---

# 22. CREADOR

Mantener la sección del creador.

Conservar:

**Robinson Andrés González Quintero**

Pero actualizar la descripción para que conecte con el proyecto actual.

Evitar sobrecargar la sección con tecnologías específicas si no son relevantes.

---

# 23. FOOTER

Actualizar:

```text
© 2025
```

a la fecha correcta del proyecto actual.

Usar:

> **© 2026 ForenSys**

Mantener el aviso:

> Para uso académico, investigativo y en entornos debidamente autorizados.

Evitar afirmar “uso exclusivo” si no existe una política formal.

Actualizar los repositorios reales.

---

# 24. SEO / META TAGS

Actualizar completamente:

```html
<title>
<meta name="description">
<meta property="og:title">
<meta property="og:description">
```

La descripción ya no debe hablar solamente de vigilancia y biometría.

Usar una descripción basada en:

> ForenSys es una suite modular para investigación judicial, criminalística, análisis digital, visión artificial, OSINT, georreferenciación y generación de reportes.

No utilizar palabras como:

> “de última generación”
> “infalible”
> “revolucionaria”

---

# 25. NAVEGACIÓN

Actualizar la navegación.

Una estructura recomendada:

```text
Inicio
Ecosistema
Vision
Lab
Tecnologías
Flujo
Casos de uso
Galería
Repositorios
```

Eliminar “Módulos” si ahora el concepto de plataforma + aplicaciones queda mejor representado mediante “Ecosistema”.

El menú debe permanecer usable en móvil.

---

# 26. DISEÑO

NO cambiar completamente la identidad visual.

Conservar:

- dark mode;
- cyan Vision;
- violeta Lab;
- grid;
- partículas;
- glow;
- tarjetas;
- bordes sutiles;
- Inter;
- JetBrains Mono.

Pero hacer que el diseño comunique algo más cercano a:

**Forensic Operations Center / Digital Investigation Platform**

y menos a:

**landing page genérica de reconocimiento facial.**

---

# 27. RESPONSIVE

Mantener y mejorar:

- desktop;
- tablet;
- mobile.

Comprobar:

- menú hamburguesa;
- tarjetas;
- grid;
- galería;
- botones;
- tablas/diagramas;
- títulos largos;
- navegación por anchors.

Ningún texto debe desbordarse.

---

# 28. ACCESIBILIDAD

Agregar o mejorar:

- `alt` descriptivos;
- estados `focus`;
- botones accesibles;
- contraste adecuado;
- `aria-label` cuando sea necesario;
- navegación por teclado;
- soporte de `prefers-reduced-motion` para las animaciones.

---

# 29. REGLAS DE CONTENIDO

Estas reglas son OBLIGATORIAS:

### NO inventar
No inventar:

- métricas;
- precisión;
- usuarios;
- instituciones;
- integraciones;
- certificaciones;
- bases de datos oficiales;
- resultados;
- benchmarks.

### NO exagerar
No utilizar:

- “100 % preciso”
- “infalible”
- “inviolable”
- “revolucionario”
- “sin precedentes”
- “inteligencia definitiva”

### NO confundir
No decir que:

- OSINT accede a información privada;
- ForenSys está conectado a bases gubernamentales oficiales;
- una ruta demuestra que una persona estuvo allí;
- una coincidencia biométrica es una prueba concluyente;
- un reporte generado automáticamente es un dictamen pericial.

---

# 30. ARQUITECTURA VISUAL FINAL DE LA LANDING

La página final debería seguir aproximadamente este orden:

```text
1. HERO
   ↓
2. ¿QUÉ ES FORENSYS?
   ↓
3. ECOSISTEMA
   ├── VISION
   └── LAB
   ↓
4. APLICACIONES
   ├── 4 Vision
   └── 4 Lab
   ↓
5. FLUJO DE INVESTIGACIÓN
   ↓
6. ARQUITECTURA / TECNOLOGÍAS
   ↓
7. CASOS DE USO / USUARIOS POTENCIALES
   ↓
8. GALERÍA
   ↓
9. REPOSITORIOS / DESCARGAS
   ↓
10. CREADOR
   ↓
11. FOOTER
```

La página debe contar una historia:

**Problema → Ecosistema → Plataformas → Aplicaciones → Flujo → Tecnología → Uso → Evidencia visual → Acceso al proyecto**

---

# 31. RESULTADO ESPERADO

El usuario debe entrar a la página y entender en menos de 30 segundos:

### ¿Qué es?
Una suite modular para investigación judicial y análisis forense.

### ¿Cómo está organizada?
Vision + Lab.

### ¿Qué tiene Vision?
Facial + Placas + Rutas + Reportes.

### ¿Qué tiene Lab?
Mobile/Cloud + MetaInspect + Ballistics 3D + OSINT.

### ¿Qué la hace diferente?
La organización modular de distintas herramientas investigativas dentro de un mismo ecosistema.

### ¿Es un producto institucional ya desplegado?
No.

Debe quedar claro que es un:

> **prototipo académico con proyección tecnológica.**

---

# 32. REVISIÓN TÉCNICA FINAL

Después de modificar `index.html`, `style.css` y `main.js`:

1. Verifica que no existan IDs rotos.
2. Verifica todos los anchors del navbar.
3. Verifica todas las rutas de imágenes.
4. Verifica todos los enlaces de GitHub.
5. Verifica que no existan placeholders `tuusuario`.
6. Verifica que no existan counters falsos.
7. Verifica que no exista texto antiguo relacionado exclusivamente con reconocimiento facial.
8. Verifica que Lab ya no aparezca como “Próximamente” si su estado real es diferente.
9. Verifica que la galería funcione.
10. Verifica el lightbox.
11. Verifica responsive.
12. Verifica consola del navegador sin errores JavaScript.
13. Verifica que no haya imágenes 404.
14. Verifica que no haya textos desactualizados como “2 módulos”.
15. Verifica que toda la página sea consistente con la documentación actualizada de ForenSys.

## PRINCIPIO FINAL

La web NO debe parecer una página de un software de reconocimiento facial que posteriormente agregó funcionalidades.

Debe parecer desde el primer segundo una:

> **suite modular de herramientas de investigación judicial y análisis forense**

en la que **Vision y Lab son plataformas principales**, y las ocho aplicaciones forman parte de un ecosistema coherente.