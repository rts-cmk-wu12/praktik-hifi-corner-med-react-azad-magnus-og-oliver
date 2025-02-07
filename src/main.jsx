import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from "react-router"
import "./style/main.scss"
import {App} from "./App.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
          <App></App>
      </Router>
  </StrictMode>,
)
