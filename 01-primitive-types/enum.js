var colors
;(function (colors) {
  colors['red'] = '#ff0000'
  colors['blue'] = '#0000ff'
  colors['green'] = '#00ff00'
})(colors || (colors = {}))
var preferences = {
  fontSize: 14,
  fontFamily: 'Times New Roman',
  color: colors.red
}
if (preferences.color === colors.red) {
  console.log(colors.red)
}
