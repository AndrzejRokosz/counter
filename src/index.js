import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


ReactDOM.render(
    <MuiThemeProvider>
        <App className='app' />
    </MuiThemeProvider>,
    document.getElementById('root')
)


