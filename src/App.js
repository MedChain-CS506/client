import React, { useState } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

//*Contexts
// import AuthProvider from './contexts/AuthContext';

//*Components
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import SignUpDialog from './components/Dialog/SignUpDialog';
import SignInDialog from './components/Dialog/SignInDialog';
// import DialogHost from './components/Dialog/DialogHost'; //!Added

//*Pages
import Routes from './pages/Routes';

//*MUI
import Hidden from '@material-ui/core/Hidden';
import theme from './theme';

function App() {
  const [signedIn] = useState(true);
  const [ready] = useState(true);
  const [signUpDialog, setSignUpDialog] = useState(false)
  const [signInDialog, setSignInDialog] = useState(false)

  return (
      <ThemeProvider theme={theme}>
        {!ready &&
          <Loading />
        }
        {ready &&
          <>
            <Navbar
              signedIn={signedIn}
              onSignUpClick={() => setSignUpDialog(true)}
              onSignInClick={() => setSignInDialog(true)}
            />

            <Routes signedIn={signedIn} />

            {/* SignUpDialog */}
            <Hidden only='xs'>
              <SignUpDialog
                open={signUpDialog}
                onClose={() => setSignUpDialog(false)}
              />
            </Hidden>
            <Hidden only={['sm', 'md', 'lg', 'xl']}>
              <SignUpDialog
                fullScreen
                open={signUpDialog}
                onClose={() => setSignUpDialog(false)}
              />
            </Hidden>

            {/* SignInDialog */}
            <Hidden only='xs'>
              <SignInDialog
                open={signInDialog}
                onClose={() => setSignInDialog(false)}
              />
            </Hidden>
            <Hidden only={['sm', 'md', 'lg', 'xl']}>
              <SignInDialog
                fullScreen
                open={signInDialog}
                onClose={() => setSignInDialog(false)}
              />
            </Hidden>
          </>
        }
      </ThemeProvider>
  )
}

export default App;
