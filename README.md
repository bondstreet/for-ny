# For NYC landing page static site generator

## Getting started

```sh
npm i
```

## Processing and Uploading Images

1. Install the [sharp](http://sharp.dimens.io/en/stable/) package, which requires [vips](https://github.com/jcupitt/libvips).

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

3. Run the image script to resize, compress, and upload images from `/tmp` to S3.

    ```sh
    npm run images
    ```

## Building
Writes files to `/dist`.

```sh
npm run build
```

## Deploying to gh-pages

```sh
npm run deploy
```

## Dev server

```sh
npm start
```

Open <http://localhost:8081/fornewyork/>


## Folder structure

- `/content` - folder of json files containing non-post content, editable using prose.io
- `/dist` - static file output
- `/posts` - folder of markdown posts with front matter, editable using prose.io
- `/src`
  - `/components` - React components (this could be more organized later)
  - `/css` - Source CSS - loaded into the `<Head />` component with css-loader
  - `/data` - reads the markdown post files and provides other data
  - `index.js` - static and client side renderer
  - `renderHtml.js` - renders static markup to contain the React app
  - `routes.js` - route config for react-router
- `/static`
  - `/images`
    - `/logos` - contains company logos used for landing page (does not get processed using image script)
    - `/social` - contains default images for Facebook/Twitter cards (does not get processed using image script)

## Github issues

- https://github.com/bondstreet/bondstreet_web/labels/For%20NYC (preferred)
- https://github.com/bondstreet/for-ny/issues

