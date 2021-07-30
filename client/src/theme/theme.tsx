import typography from './typography';
import { createTheme, Theme } from '@material-ui/core/styles'

export const titleTextColor = '#2d85e2';
export const background = '#F0F1F6';
export const white = '#FFF';
export const gray = '#E6E6E6';
export const darkGray = '#bdbdbd';
export const primary = '#662ed2';
export const primaryLight = '#5141e6';
export const pink = '#d426c6';
export const pinkDark = '#64348f';
export const secondary = '#FFF';
export const secondaryLight = '#e1e1e1';
export const blue = '#2AA4D1';
export const danger = '#d12f3b';

const theme: Theme = createTheme({
  palette: {
    background: {
      default: '#F4F6F8',
    },
    primary: {
      contrastText: '#ffffff',
      main: primary
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
    },
    success: {
      main: '#d426c6'
    }
  },
  typography,
  props: {
    MuiButton: {
      disableFocusRipple: true
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    },
    MuiInputBase: {
      root: {
      }
    }
  }
}
);

export default theme;


