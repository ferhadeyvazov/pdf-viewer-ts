# PDF Reader and Editor

React+Typescript+TailwindCSS və bir çox texnologiyalarla yigilan bu sehife PDF-leri göstərir və üzərində düzəliş edə bilir. İstifadə etdiyim texnologiyalar ətraflı aşağıda göstərilmişdir.

## Tech Stack

**Client:** React, TypeScript, TailwindCSS

**Server:** Vite

**PDF Framework:** React-Pdf-Viewer

**2D Canvas Library:** Konva.js

## Documentation

[React](https://react.dev/), [React-pdf-viewer](https://react-pdf-viewer.dev/), [Konva.js](https://konvajs.org/index.html), [TailwindCSS](https://tailwindcss.com/)

## Installation

Install my-project with yarn

```bash
git clone https://github.com/ferhadeyvazov/pdf-viewer-ts.git
cd pdf-viewer-ts
```

## Usage/Examples

```javascript
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { Stage, Layer, Rect } from 'react-konva';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function App() {
  return <Component />
}
```

Diqqət edilməli şey **pdfjs-dist** versiyası workerUrl -dəki linkin versiyasına bərabər olmalıdır. 

Mən ən son versiya olan **4.10.38** versiya seçdim. Aşağıdakı kimi:

```
"pdfjs-dist": "4.10.38"
```
```
https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.mjs
```

Default Layout Plugin-ni **Viewer** teqinə property kimi əlavə edin:

```
<Viewer fileUrl={urlPdf} plugins={[defaultLayoutPluginInstance]} />
```
Default Layout Plugin yükləyərkən mütləq onun stilini də import edin:

```
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
```

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## License

[MIT](https://choosealicense.com/licenses/mit/)