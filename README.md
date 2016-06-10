
# For NYC landing page static site generator

## Getting started

```sh
npm i
```

## Processing Images

Install the sharp package, which requires vips.

```sh
brew install homebrew/science/vips
npm i sharp
```

Run the image script to resize and compress images from `/static/src/images`

```sh
npm run images
```

## Build
Writes files to `/dist`.

```sh
npm run build
```


## Deploy to gh-pages

```sh
npm run deploy
```

## Dev server

```sh
npm start
```

Open <http://localhost:8081/fornewyork>


## Folder structure

- `/dist` - static file output
- `/posts` - folder of markdown posts with front matter
- `/src`
  - `/components` - React components (this could be more organized later)
  - `/css` - Source CSS - loaded into the `<Head />` component with css-loader
  - `data.js` - reads the markdown post files and provides other data
  - `index.js` - static and client side renderer
  - `renderHtml.js` - renders static markup to contain the React app
  - `routes.js` - route config for react-router

