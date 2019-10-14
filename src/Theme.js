import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: red.A400,
      light: '#E7F6E7',
      contrastText: '#FFFFFF'
    }
  },
});

export default theme;