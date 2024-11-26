import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
// Importamos el componente Provider de la librearía react-redux
import { Provider } from 'react-redux'
// Importamos el componente store que definimos en el fichero ./store/index
import { store } from './store/index'

const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3c1cc9',
      light: '#5f43d6',
      dark: '#1f0a7b',
    },
    secondary: {
      main: '#c51162',
      light: '#d66197',
      dark: '#8c003e',
    },
    error: {
      main: '#e82424',
      light: '#ef5050',
      dark: '#bd3b3b',
    },
    warning: {
      main: '#f37106',
      light: '#e69a5b',
      dark: '#9e4a04',
    },
    info: {
      main: '#068ed8',
      light: '#229ee2',
      dark: '#85bad8',
    },
    success: {
      main: '#33c939',
      light: '#70c974',
      dark: '#0d8c12',
    },
  },
 })

// Todo el código que tenían de otras importaciones y el código de createTheme lo dejan como está.
// Finalmente escribimos lo siguiente: lo que está en púrpura es lo que añadí a lo que ya estaba.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
