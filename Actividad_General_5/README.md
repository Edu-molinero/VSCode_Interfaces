Proyecto: pagina responsive Kart-Z

Descripcion

Proyecto que demuestra una pagina responsive para un circuito de karts y centro de testing de vehiculos. Combina maquetacion con Bootstrap 5, gestion de imagenes, audio y video HTML5, animaciones CSS y transiciones. Los colores corporativos son azul y naranja.

Estructura de archivos entregada

`index.html` pagina principal con cabecera, seccion principal con 3 tarjetas, zona multimedia y footer con licencia Creative Commons.

`estilos.css` estilos personalizados incluyendo la animacion del titulo, transiciones en imagenes y personalizacion de la barra de navegacion.

`imagenes/` carpeta con las imagenes usadas en las tarjetas y el poster del video.

`media/` carpeta con audios y videos utilizados por la pagina.

`README_images.txt` notas sobre optimizacion de imagenes (si aplica).

Resumen de cumplimiento de requisitos

1. Maquetacion

- Se uso Bootstrap 5. Cabecera con `navbar`, seccion principal con tres tarjetas (`col-md-4`) y footer centrado.

2. Imagenes

- En la carpeta `imagenes` hay fotos JPG utilizadas en las tarjetas. A continuacion se listan los archivos con su tamaño actual. Si requiere, se pueden optimizar a versiones mas pequeñas (recomendado < 1-2 MB).

Listado imagenes actuales

- `kart_avanzado.jpg` tamaño 318333 bytes (aprox 310.8 KB)
- `kart_basico.jpg` tamaño 294380 bytes (aprox 287.5 KB)
- `kart_experto.jpg` tamaño 209856 bytes (aprox 204.8 KB)

Observaciones sobre optimizacion

3. Licencia CC

- El footer incluye un enlace y el icono de la licencia Creative Commons Reconocimiento-NoComercial 4.0 Internacional (permite compartir pero no uso comercial).

4. Audio

- Archivos en `media`:

- `Audio_Presentacion.mp3` tamaño 127637 bytes (aprox 124.6 KB)
- `Audio_Presentacion_2.ogg` tamaño 92380 bytes (aprox 90.2 KB)
- `Audio_Presentacion_extra.ogg` tamaño 92380 bytes (aprox 90.2 KB)

- El reproductor de audio en `index.html` incluye fuentes multiples (`.mp3` y `.ogg`) y enlaces de descarga como fallback.

5. Video

- Archivos en `media`:

- `Video_Hola.mp4` tamaño 9749226 bytes (aprox 9.3 MB)
- `Video_Karting.mov` tamaño 34951226 bytes (aprox 33.3 MB)
- `video_poster.svg` tamaño 347 bytes

6. Animaciones y transiciones

- Se implemento una animacion CSS para el elemento h1 que aumenta su tamaño, cambia color entre azul y naranja y se desplaza de izquierda a derecha con duracion 4s e iteracion infinita.
- Las imagenes principales tienen un `:hover` con transition que escala al 120 por ciento y reduce opacidad a 0.7 con easing ease-in-out y duracion 2s.

