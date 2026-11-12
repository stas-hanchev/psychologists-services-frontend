import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tokens: {
      textMuted: string;
      textFaded: string;
      border: string;
      borderStrong: string;
      chip: string;
      price: string;
      surface: string;
      overlay: string;
      accentPurple: string;
      accentYellow: string;
    };
  }
  interface PaletteOptions {
    tokens?: Palette['tokens'];
  }
}

export const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1280, xl: 1440 },
  },
  palette: {
    primary: {
      main: '#54be96',
      dark: '#36a379',
      light: 'rgba(84, 190, 150, 0.2)',
      contrastText: '#fbfbfb',
    },
    text: {
      primary: '#191a15',
      secondary: '#8a8a89',
      disabled: 'rgba(25, 26, 21, 0.3)',
    },
    background: {
      default: '#f3f3f3',
      paper: '#fbfbfb',
    },
    error: {
      main: '#d64545',
    },
    divider: 'rgba(25, 26, 21, 0.1)',
    tokens: {
      textMuted: 'rgba(25, 26, 21, 0.5)',
      textFaded: 'rgba(25, 26, 21, 0.3)',
      border: 'rgba(25, 26, 21, 0.1)',
      borderStrong: 'rgba(25, 26, 21, 0.2)',
      chip: '#f3f3f3',
      price: '#38cd3e',
      surface: '#fbfbfb',
      overlay: 'rgba(25, 26, 21, 0.6)',
      accentPurple: '#4535af',
      accentYellow: '#fbc75e',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), Arial, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 30,
          padding: '14px 40px',
          fontSize: 16,
          fontWeight: 500,
          lineHeight: '20px',
          letterSpacing: '-0.01em',
          whiteSpace: 'nowrap',
          transition: theme.transitions.create(['background-color', 'border-color', 'color']),
          '&.Mui-focusVisible': {
            outline: `2px solid ${theme.palette.primary.dark}`,
            outlineOffset: 2,
          },
        }),
        contained: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            opacity: 0.6,
          },
        }),
        outlined: ({ theme }) => ({
          padding: '13px 38px',
          borderColor: theme.palette.tokens.borderStrong,
          color: theme.palette.text.primary,
          '&:hover': {
            borderColor: theme.palette.primary.main,
            backgroundColor: 'transparent',
          },
        }),
      },
    },
  },
});
