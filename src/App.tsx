import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@emotion/react'
import { Box, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import theme from './styles/theme'

function App() {
  return (
    <RecoilRoot>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box>hihi</Box>
        </ThemeProvider>
      </MuiThemeProvider>
    </RecoilRoot>
  )
}

export default App
