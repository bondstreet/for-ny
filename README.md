
# For NYC landing page static site generator

## Getting started

```sh
npm i
```

## Build
Writes files to `/dist`.

```sh
npm start
```

## Dev server

TK


## Folder structure

- `/dist` - static file output
- `/posts` - folder of markdown posts with front matter
- `/src`
  - `/components` - React components (this could be more organized later)
  - `/css` - Source CSS - loaded into the `<Head />` component with css-loader
  - `data.js` - reads the markdown post files and provides other data
  - `index.js` - static and client side renderer
  - `routes.js` - route config for react-router

