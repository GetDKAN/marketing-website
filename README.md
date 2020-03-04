
# DKAN Marketing Website

The official website for DKAN: [getdkan.org](http://getdkan.com)


## Commands

```sh
# working locally
npm run dev

# generate build (Add --prefix-paths if you are using path prefix!)
npm run build

# format code
npm run format

# lint code
npm run lint

# Generate generate post preview images (npm run dev need to run before)
npm run generatePostPreviewImages
```

## Configure

```bash
 ├── data
     ├── siteConfig.js
     ├── sites.json
     ├── team.json
```

## Content

```bash
├── content
    ├── images
    ├── pages
```

## Images
Upload image files to `/static`
Then add them with html `<img src={'/image.png'} alt="Logo" />`
or markdown `[![logo](./image.png)]`

## Markdown
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://api.netlify.com/)
