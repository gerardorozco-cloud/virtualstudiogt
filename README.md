# Builder DTF y Sublimacion

Herramienta web estatica para clientes de impresion DTF y sublimacion.

Incluye:

- DTF Mimaki TxF300 con ancho de 57 cm.
- Sublimacion Mimaki TS100 con papel 110 cm y 160 cm.
- Sublimacion A4 Epson F170 con multi hojas A4.
- Opcion de espejo para exportar PNG/PDF A4 listo para sublimacion.
- Preset para tazas de 20 x 9 cm a 300 DPI.
- Exportacion PNG transparente y PDF.
- Panel de nombres y numeros.

## Archivos principales

- `index.html`: interfaz de la herramienta.
- `styles.css`: estilos blanco/celeste.
- `app.js`: motor de carga, nesting, texto, nombres/numeros, exportacion PNG/PDF y orden.
- `.nojekyll`: evita que GitHub Pages procese el sitio con Jekyll.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `dtf-builder`.
2. Sube estos archivos en la raiz del repositorio.
3. En GitHub abre `Settings > Pages`.
4. En `Build and deployment`, selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Guarda y espera a que GitHub publique el sitio.

La URL quedara con este formato:

```text
https://TU_USUARIO.github.io/dtf-builder/
```

Cuando tengas esa URL publica, crea el QR con esa direccion.
