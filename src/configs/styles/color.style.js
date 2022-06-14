const COLOR = {
  WHITE: '#FFFFFF',
  LIGHT: '#F6F9FB',
  BLACK: '#000000',
  DANGER: '#E04422',
  DANGER2: '#FE2C55',
  LIGHT_DANGER: '#FFC4C4',
  LIGHTER_DANGER: '#FFE8E3',
  GRAY: '#818181',
  LIGHT_GRAY: '#dadada',
  TRANSPARENT: 'transparent',

  setOpacity: (hexColor, opacity) => {
    const hexOpacity = Math.floor(opacity * 255).toString(16);
    return `${hexColor}${hexOpacity}`;
  },
};

Object.freeze(COLOR);

export default COLOR;
