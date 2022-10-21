import React from "react"
import ReactDom from 'react-dom/client'
import 'bulma/css/bulma.min.css'
import Router from "./Router"
import './static/style.css'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<Router />)