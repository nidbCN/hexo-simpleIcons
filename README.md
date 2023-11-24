# hexo-simpleicons

![Picture](https://raw.githubusercontent.com/nidbCN/hexo-simpleIcons/master/images/01.jpg)

<div align="center">

<img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/simpleicons.svg" width=70 height=70/>

Use [simple-icons](https://github.com/simple-icons/simple-icons) in your hexo blog.
</div>

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
  cdn_url: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/"
  # The type you want to use, if you want use simple-icons npm package, modify it to package.
  type: "cdn"
  # The zoom size of your icon, in default, the value is 1.2. The icon will has a seem height of line, you can modify this value to resize the icon.
  size: 1.2
```

#### NOTICE

By default, we did not add the package "simple-icons", if you want to use simple-icons npm package, you need:

```bash
cd node_modules/hexo-simpleicons
npm install simple-icons
```

Install this package first.

### Writting

Use `{% icon [ICON NAME] [COLOR] %}` to add the `simple-icons` icon you'd like to include. Color is an optional second parameter to pass a color directly to the icon.

You can use this tag in text or markdown headline but you **can not** use it in the hexo passage title.

You can find `[ICON NAME]` and `[COLOR]` at the Simple Icons offical website: [SimpleIcons.org](https://simpleicons.org/)
