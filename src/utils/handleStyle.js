const stylesArr = [
  'margin',
  'marginLeft',
  'marginRight',
  'marginBottom',
  'marginTop',
  'marginHorizontal',
  'marginVertical',
  'marginStart',
  'marginEnd',

  'padding',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingHorizontal',
  'paddingVertical',
  'paddingEnd',
  'paddingStart',

  'position',
  'bottom',
  'left',
  'top',
  'right',

  'justifyContent',
  'alignItems',
];

const handleResProps = (restProps, styles) => {
  Object.keys(restProps).forEach(k => {
    const key_value = k.split('-');

    const kStyle = key_value[0];
    const kValueStyle = key_value[1];

    const key = stylesArr.find(s => s === kStyle);

    if (key) {
      styles[kStyle] = Number.isInteger(Number(kValueStyle))
        ? Number(kValueStyle)
        : restProps[kStyle];
    }
  });

  return styles;
};

const removeStyleUndefined = styles => {
  Object.keys(styles).forEach(s => {
    if (styles[s] === undefined) {
      delete styles[s];
    }
  });

  return styles;
};

export { handleResProps, removeStyleUndefined };
