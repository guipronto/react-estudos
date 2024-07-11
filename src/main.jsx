import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import theme from './style/theme'
import GlobalStyle from './style/global'

import {Routes} from './routes/index'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >

    <ThemeProvider theme = {theme}>

    <GlobalStyle/>

    <Routes />

    </ThemeProvider>

  </React.StrictMode>,
)
