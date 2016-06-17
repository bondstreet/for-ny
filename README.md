
# For NYC landing page static site generator

## Getting started

```sh
npm i
```

## Processing and Uploading Images

1. Install the sharp package, which requires vips.

```sh
brew install homebrew/science/vips
npm i sharp
```

2. Create an `.aws.json` file based on `.aws.example.json` and add credentials for S3.

```json
{
  "AWS_ACCESS_KEY_ID": "<your-id>",
  "AWS_SECRET_ACCESS_KEY": "<your-secret>"
}
```

3. Copy new JPG files to the `/tmp` folder.

4. Run the image script to resize, compress, and upload images from `/tmp` to S3.
The images will be added to the `bst-fornyc` bucket.
The URL will follow the pattern: `https://s3.amazonaws.com/bst-fornyc/YourImage.jpg`.
Each size has a suffix corresponding to the width, e.g. `_w640`.

```sh
npm run images
```

After the files have been processed and uploaded, they will be moved to the `/tmp/processed` folder. Images in the `/tmp` folder are ignored in git, and they can be moved or deleted at this point.

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

Open <http://localhost:8081/fornewyork/>


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

## Github issues

- https://github.com/bondstreet/bondstreet_web/labels/For%20NYC
- https://github.com/bondstreet/for-ny/issues

