const COLOR = {
  WHITE: '#FFFFFF',
  LIGHT: '#F6F9FB',
  BLACK: '#000000',
  DANGER: '#E04422',
  GRAY: '#818181',
  LIGHT_GRAY: '#F3F3F3',
  TRANSPARENT: 'transparent',

  setOpacity: (hexColor, opacity) => {
    const hexOpacity = Math.floor(opacity * 255).toString(16);
    return `${hexColor}${hexOpacity}`;
  },
};

Object.freeze(COLOR);

export default COLOR;
