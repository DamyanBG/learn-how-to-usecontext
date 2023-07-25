import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppWithContextInside from './AppWithContextInside.jsx'
import AppSeparateContexts from './AppSeparateContexts.jsx'
import AppWithReducerContext from './AppWithReducerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppWithContextInside /> */}
    {/* <AppSeparateContexts /> */}
    <AppWithReducerContext />
  </React.StrictMode>,
)
