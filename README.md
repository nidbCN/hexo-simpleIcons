# hexo-simpleicons

Use [simple-icons](https://github.com/simple-icons/simple-icons) in your hexo blog.

## Installation

```bash
npm install hexo-simpleicons --save
```

## Usage

### Config

Edit `_config.yml` and add:

```yml
simple_icons:
  enable: true
  options:
    cdn_url: "https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/"
  type: "cdn"
```

If you want use simple-icons npm package, just write `"package"` in `type`.