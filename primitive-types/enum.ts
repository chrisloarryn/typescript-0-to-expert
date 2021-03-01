enum colors {
  red = '#ff0000',
  blue = '#0000ff',
  green = '#00ff00'
}

const preferences = {
  fontSize: 14,
  fontFamily: 'Times New Roman',
  color: colors.red
}

if (preferences.color === colors.red) {
  console.log('red')
}
