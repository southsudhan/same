export const theme = {
  colors: {
    primary: {
      main: '#00FFFF', // Electric blue
      dark: '#00CCCC',
      light: '#66FFFF'
    },
    secondary: {
      main: '#FF00FF', // Magenta
      dark: '#CC00CC',
      light: '#FF66FF'
    },
    accent: {
      main: '#00FF00', // Lime green
      dark: '#00CC00',
      light: '#66FF66'
    },
    background: {
      primary: '#0A0F1F', // Deep navy
      secondary: '#1A1F2F',
      paper: '#2A2F3F'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      disabled: '#707070'
    }
  },
  typography: {
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5
    }
  },
  spacing: (value: number) => `${value * 8}px`,
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px'
  },
  transitions: {
    default: '0.3s ease-in-out'
  }
};

export type Theme = typeof theme;