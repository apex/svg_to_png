
# svg_to_png

Lambda function to convert SVG to PNG using PhantomJS.

## Installation

Add svg_to_png to your Apex project:

```
$ git submodule add https://github.com/apex/svg_to_png.git functions/svg_to_png
```

Deploy it:

```
$ apex deploy svg_to_png
```

Try it:

```
$ apex invoke svg_to_png < functions/svg_to_png/event.json
```

## API

Input:

 - `svg` (string) base64 SVG input
 - `width` (number) width of SVG (optional)
 - `height` (number) height of SVG (optional)

Output:

 - `image` (string) base64 PNG

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)
[![](http://apex.sh/images/badge.svg)](https://apex.sh/ping/)

---

> [tjholowaychuk.com](http://tjholowaychuk.com) &nbsp;&middot;&nbsp;
> GitHub [@tj](https://github.com/tj) &nbsp;&middot;&nbsp;
> Twitter [@tjholowaychuk](https://twitter.com/tjholowaychuk)
