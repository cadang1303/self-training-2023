/* eslint-disable react/prop-types */
import { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { v4 as uuid } from 'uuid'
import { ToastContext } from './ToastContext'
import { Toast } from './Toast'

import './toast.css'
const body = document.body

export const ToastProvider = (props) => {
  const [toasts, setToasts] = useState([])
  const open = (content) => setToasts((currentToasts) => [...currentToasts, { id: uuid(), content }])
  const close = (id) => setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id))
  const contextValue = useMemo(() => ({ open }), [])

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}

      {createPortal(
        <div className='toasts-wrapper'>
          {toasts.map((toast) => (
            <Toast key={toast.id} close={() => close(toast.id)}>
              {toast.content}
            </Toast>
          ))}
        </div>,
        body
      )}
    </ToastContext.Provider>
  )
}
