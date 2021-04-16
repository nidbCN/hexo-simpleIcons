# hexo-simpleicons

![Picture](https://raw.githubusercontent.com/nidbCN/hexo-simpleIcons/master/images/01.jpg)

![SimpleIcon](https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/simpleicons.svg)

Use [simple-icons](https://github.com/simple-icons/simple-icons) in your hexo blog.

## Installation

```bash
npm install hexo-simpleicons --save
```

## Usage

### Configure

Edit `_config.yml` and add:

```yml
simple_icons:
  enable: true
  # The cdn base url you want to use, if you save the simple-icons in your server, just modify it to the url of your simple-icons storage.
  cdn_url: "https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/"
  # The type you want to use, if you want use simple-icons npm package, modify it to package.
  type: "cdn"
  # The zoom size of your icon, in default, the value is 1.2. The icon will has a seem height of line, you can modify this value to resize the icon.
  size: 1.2
```

### Writting

Use

```md
{% icon [ICON NAME] %} to add a simple-icons. If you use CDN, the icon will in a im attr, use package it will be a svg in HTML document directly.
```

You can find `[ICON NAME]` in simple icon offical website: [SimpleIcons.org](https://simpleicons.org/)
