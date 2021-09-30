import { useContext } from 'react'
import { createContext, useState } from 'react'
import Toasty from '../components/Toasty'

const ToastyContext = createContext({})

export const ToastyProvider = ({ children }) => {
  const [toasty, setToasty] = useState({
    open: false,
    text: '',
    severity: 'info',
  })
}