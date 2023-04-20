/* eslint-disable no-undef */
import ReactDOM from 'react-dom'
import './modals.modules.scss'

const portalDiv = document.getElementById('portal')!

export default function Modal({ open, children, onClose }: any) {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div className='overlay'></div>
      <div className='modal-container'>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    portalDiv
  )
}
