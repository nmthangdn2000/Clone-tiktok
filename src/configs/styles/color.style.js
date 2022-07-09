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
  LIGHT_GRAY2: '#f7f7f7',
  TRANSPARENT: 'transparent',
  BACKGROUND_LOADING: '#171925',

  setOpacity: (hexColor, opacity) => {
    const hexOpacity = Math.floor(opacity * 255).toString(16);
    return `${hexColor}${hexOpacity}`;
  },

  TOMATO: '#FF6347',
  ORANGE: '#FFA500',
  GREEN: '#23FF67',
  LIGHT_GREEN: '#A7FFC2',
};

Object.freeze(COLOR);

export default COLOR;
