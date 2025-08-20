import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DisplayContextProvider } from './context/DisplayContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
        <DisplayContextProvider>
            <CartContextProvider>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </CartContextProvider>
        </DisplayContextProvider>
    </ThemeContextProvider>
)
