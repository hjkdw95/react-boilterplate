import { createTheme } from '@mui/material'

const theme = createTheme({
  breakpoints: {},
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          fontSize: 10,
          margin: 0,
          padding: 0,
          '&:focus': {
            outline: 'none',
          },
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: '15px',
          backgroundColor: '#333333',
          borderRadius: '5px',
          color: '#ffffff',
          fontSize: '14px',
          lineHegiht: '20px',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: 'none',

          '& .MuiTableCell-root': {
            borderBottom: 'none',
          },
          '& .MuiTableCell-head': {
            padding: '16px 20px',
          },

          '& .MuiTableCell-paddingCheckbox': {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        sizeLarge: {
          '& .MuiSvgIcon-root': {
            fontSize: '16px',
          },
        },
      },
    },
  },
  shadows: [
    'none',
    '0 3px 10px 0 rgba(0, 0, 0, 0.15)', // for small round
    '0 3px 30px 0 rgba(0, 0, 0, 0.15)', // for card
    '0px 1px 4px rgba(100, 116, 139, 0.12)',
    '0px 1px 5px rgba(100, 116, 139, 0.12)',
    '0px 1px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 6px rgba(100, 116, 139, 0.12)',
    '0px 3px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
    '0px 5px 12px rgba(100, 116, 139, 0.12)',
    '0px 5px 14px rgba(100, 116, 139, 0.12)',
    '0px 5px 15px rgba(100, 116, 139, 0.12)',
    '0px 6px 15px rgba(100, 116, 139, 0.12)',
    '0px 7px 15px rgba(100, 116, 139, 0.12)',
    '0px 8px 15px rgba(100, 116, 139, 0.12)',
    '0px 9px 15px rgba(100, 116, 139, 0.12)',
    '0px 10px 15px rgba(100, 116, 139, 0.12)',
    '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
    '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
  ],
  palette: {
    common: {
      black: '#333333',
      white: '#FFFFFF',
    },
    primary: {
      main: '#3f36f4',
      dark: 'rgba(63, 54, 244, 0.7)',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#AFB2FD',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FFD500',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#FF4800',
      contrastText: '#FFFFFF',
    },
    grey: {
      50: '#F1F4F8',
      100: '#E1E5EB',
      200: '#D1D6DE',
      300: '#B3B9C4',
      400: '#989DA7',
      500: '#333333',
    },
    text: {
      primary: '#333333',
      secondary: '#b3b9c4',
      disabled: '#ffffff',
    },
    action: {
      disabledBackground: '#E1E5EB',
      disabled: '#fff',
    },
    background: {
      paper: '#f8fbff',
      default: '#ffffff',
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontSize: 10,
    fontFamily:
      "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.4rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.4rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '1.3rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    body2: {
      fontSize: '1.2rem',
      fontWeight: 400,
    },
  },
})

export default theme
