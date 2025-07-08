import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App'
import { Provider } from 'react-redux'
import { Store } from './Store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>,
)
