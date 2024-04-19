export const theme = Object.freeze({
  colors: {
    black: '#101828',
    gray: '#475467',
    orange: '#E44848',
    orangeDark: '#d84343',
    yellow: '#FFC531',
    lightBlue: '#F2F4F7',
    lightGray: '#F7F7F7',
    scrollbar: '#D9D9D9',
    white: '#ffffff',

    blackTransparent: '#10182833',
    grayTransparent: '#47546733',
  },

  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
  },

  spacing: value => `${4 * value}px`,

  animation: {
    transition: '0.3s ease',
  },
});
