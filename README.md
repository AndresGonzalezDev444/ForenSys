<div align="center">

<img src="imagenes/ForenSys-LOGO.png" alt="ForenSys Logo" width="260" />

# ForenSys

### Suite modular para investigación judicial y análisis forense

Visión artificial · Análisis digital · OSINT · Georreferenciación · Reportes periciales

<br/>

![Estado](https://img.shields.io/badge/estado-prototipo%20acad%C3%A9mico-blue?style=for-the-badge)
![Arquitectura](https://img.shields.io/badge/arquitectura-modular-00c2a8?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

<br/>

[Ecosistema](#-el-ecosistema) ·
[Aplicaciones](#-aplicaciones) ·
[Flujo de trabajo](#-flujo-de-investigación) ·
[Arquitectura](#-arquitectura) ·
[Tecnologías](#-tecnologías) ·
[Repositorios](#-repositorios-del-proyecto) ·
[Autor](#-autor)

</div>

---

## 📖 ¿Qué es ForenSys?

**ForenSys** es un ecosistema tecnológico que integra **visión artificial, análisis digital, inteligencia investigativa, georreferenciación y herramientas especializadas** para apoyar procesos de identificación, análisis de evidencias, reconstrucción investigativa y generación de información pericial.

Está organizado en **dos plataformas** y **ocho aplicaciones**, de forma que cada etapa de una investigación (desde la captura de la evidencia hasta el reporte final) pueda abordarse desde un mismo entorno.

> Este repositorio contiene el **sitio web de presentación** de la suite. El código de cada plataforma vive en su propio repositorio (ver [Repositorios del proyecto](#-repositorios-del-proyecto)).

> [!IMPORTANT]
> **ForenSys es una herramienta de apoyo.** Sus resultados deben ser interpretados y verificados por personal competente y **no sustituyen el criterio profesional del investigador o perito**.

---

## 🧩 El ecosistema

<table>
<tr>
<td align="center" width="50%">

<img src="imagenes/forensys-vision.png" alt="ForenSys Vision" width="150" />

### ForenSys Vision
Análisis visual, identificación y apoyo a la investigación operativa.

</td>
<td align="center" width="50%">

<img src="imagenes/Forensys-lab.png" alt="ForenSys Lab" width="150" />

### ForenSys Lab
Análisis forense, investigación digital y herramientas especializadas.

</td>
</tr>
</table>

---

## 🛠️ Aplicaciones

### 👁️ ForenSys Vision

| Aplicación | Categoría | Descripción | Estado |
|---|---|---|---|
| **Reconocimiento Facial** | Visión artificial | Detección y comparación de rostros como apoyo a procesos de identificación. | ✅ Implementado |
| **Reconocimiento de Placas** | Visión artificial / OCR | Detección de vehículos y lectura de placas (YOLO + OCR). | 🧪 Prototipo |
| **Trazador de Rutas** | Geoespacial | Mapa interactivo para representar ubicaciones y posibles trayectorias. | 🧪 Prototipo |
| **Reporte Pericial** | Documentación | Generación de informes PDF estructurados a partir de los resultados. | ✅ Implementado |

### 🔬 ForenSys Lab

| Aplicación | Categoría | Descripción | Estado |
|---|---|---|---|
| **Mobile / Cloud** | Movilidad | Extensión del ecosistema para trabajo desde dispositivos móviles. | 🚧 En desarrollo |
| **Cyber & MetaInspect** | Investigación digital | Análisis de imágenes, metadatos técnicos y datos EXIF. | ✅ Implementado |
| **Ballistics 3D** | Simulación 3D | Simulación y representación tridimensional de trayectorias de proyectiles. | ✅ Implementado |
| **OSINT & NetTracker** | Inteligencia | Investigación en fuentes abiertas y correlación de información pública. | ✅ Implementado |

---

## 🔄 Flujo de investigación

ForenSys conecta las etapas de una investigación, del hallazgo al análisis:

```mermaid
flowchart TD
    A[Evidencia] --> B[Captura / Recolección]
    B --> C[ForenSys Vision]
    C --> D[Identificación · Vehículo · Ubicación]
    D --> E[ForenSys Lab]
    E --> F[Análisis digital · OSINT · Simulación]
    F --> G[Correlación de información]
    G --> H[Reporte Pericial]
    H --> I[Análisis humano]

    style C fill:#0e7490,color:#fff
    style E fill:#0f766e,color:#fff
    style I fill:#7c3aed,color:#fff
```

---

## 🏗️ Arquitectura

```text
[ FORENSYS CORE ]
│
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

---

## 💻 Tecnologías

| Área | Herramientas |
|---|---|
| **Visión artificial** | `OpenCV`, `YuNet` (FaceDetectorYN), modelos de detección de vehículos |
| **IA / OCR** | Modelos de aprendizaje profundo preentrenados y OCR para placas |
| **Backend & API** | `Python`, `FastAPI` |
| **Datos** | `SQLite`, `SQLAlchemy` |
| **Investigación digital** | `ExifTool`, metodologías tipo `Sherlock` para OSINT |
| **Geoespacial** | `Folium`, `Leaflet` |
| **Sitio web** | HTML5, CSS3, JavaScript (vanilla) |

---

## 🎯 ¿Dónde puede utilizarse?

<div align="center">
<table>
<tr>
<td align="center"><img src="imagenes/logo-policiaNacional.png" height="70" alt="Policía Nacional" /><br/><sub><b>Policía Nacional</b></sub></td>
<td align="center"><img src="imagenes/CTI-logo.png" height="70" alt="CTI" /><br/><sub><b>CTI</b></sub></td>
<td align="center"><img src="imagenes/DIJIN-logo.png" height="70" alt="DIJIN" /><br/><sub><b>DIJIN</b></sub></td>
</tr>
</table>
</div>

Como apoyo técnico, educativo o investigativo en:

- Laboratorios de criminalística
- Laboratorios de informática forense
- Instituciones educativas
- Centros de investigación
- Empresas privadas de seguridad

**Casos de uso**

| Caso | Capacidad |
|---|---|
| Identificación | Reconocimiento facial |
| Análisis vehicular | Reconocimiento de placas |
| Reconstrucción | Análisis de ubicaciones y trayectorias |
| Evidencia digital | Metadatos e imágenes |
| Investigación digital | Inteligencia de fuentes abiertas (OSINT) |
| Análisis especializado | Simulación de balística 3D |
| Documentación | Reportes periciales en PDF |
| Movilidad | Operación desde dispositivos soportados |

---

## 📸 Capturas

<!-- Reemplaza los nombres por los archivos reales de tu carpeta /imagenes -->

| ForenSys Vision | ForenSys Lab |
|:---:|:---:|
| <img src="imagenes/NOMBRE-CAPTURA-VISION.png" alt="Captura Vision" width="420" /> | <img src="imagenes/NOMBRE-CAPTURA-LAB.png" alt="Captura Lab" width="420" /> |

---

## 🚀 Ejecutar el sitio localmente

Este repositorio es un sitio estático, no requiere instalación de dependencias.

```bash
# 1. Clonar el repositorio
git clone https://github.com/AndresGonzalezDev444/ForenSys.git
cd ForenSys

# 2. Abrir index.html en el navegador, o servirlo localmente:
python -m http.server 8000
# → http://localhost:8000
```

> Se recomienda usar un servidor local, ya que el sitio referencia recursos con rutas absolutas (`/imagenes/...`).

**Estructura del repositorio**

```text
ForenSys/
├── imagenes/      # Logos, capturas y recursos gráficos
├── index.html     # Página principal
├── main.js        # Interacciones, animaciones y galería
└── style.css      # Estilos
```

---

## 📦 Repositorios del proyecto

<table>
<tr>
<td align="center" width="50%">
<img src="imagenes/forensys-vision.png" height="90" alt="ForenSys Vision" /><br/>
<b>ForenSys Vision</b><br/>
<a href="https://github.com/AndresGonzalezDev444/ForenSys-Vision">Ver repositorio →</a>
</td>
<td align="center" width="50%">
<img src="imagenes/forensys-lab.png" height="90" alt="ForenSys Lab" /><br/>
<b>ForenSys Lab</b><br/>
<a href="https://github.com/AndresGonzalezDev444/ForenSys-Lab">Ver repositorio →</a>
</td>
</tr>
</table>

---

## ⚖️ Uso responsable

ForenSys está pensado para uso **académico, investigativo y en entornos debidamente autorizados**. Quien lo utilice es responsable de cumplir la normativa aplicable sobre protección de datos personales, cadena de custodia y uso de información biométrica.

---

## 👨‍💻 Autor

<table>
<tr>
<td width="110" align="center">
<img src="imagenes/perfil01.webp" width="90" style="border-radius:50%" alt="Robinson Andrés González Quintero" />
</td>
<td>

**Robinson Andrés González Quintero**
Desarrollador de software y entusiasta de la ciberseguridad, enfocado en crear soluciones tecnológicas aplicadas a la investigación y el análisis.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/AndresGonzalezDev444)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andres-gonzalez444)
[![Website](https://img.shields.io/badge/Web-andresgonzalezdev.me-00c2a8?style=flat&logo=googlechrome&logoColor=white)](https://andresgonzalezdev.me)

</td>
</tr>
</table>

---

<div align="center">

<img src="imagenes/ForenSys-LOGO.png" alt="ForenSys" width="90" />

**© 2026 ForenSys** — Prototipo tecnológico e investigativo.

</div>
