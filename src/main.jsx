import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import SearchProvider from './context/ContextApi'
createRoot(document.getElementById('root')).render(
  
  <SearchProvider>
    <App/>
  </SearchProvider>
)
