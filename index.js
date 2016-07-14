
const proc = require('child_process')

/**
 * Transform SVG to PNG.
 *
 * Input:
 *
 * - `svg` (string) base64 SVG input
 * - `width` (number) width of SVG (optional)
 * - `height` (number) height of SVG (optional)
 *
 * Output:
 *
 * - `image` (string) base64 PNG
 *
 */

exports.handle = (event, ctx, cb) => {
  if (!event.svg) return cb(new Error('.svg required'))

  const size = event.width || event.height
    ? { width: event.width, height: event.height }
    : undefined

  try {
    const options = { input: event.svg }
    const args = ['convert.js', JSON.stringify(size)]
    const image = proc.execFileSync('./phantomjs', args, options).toString()
    cb(null, { image })
  } catch(err) {
    cb(err)
  }
}
