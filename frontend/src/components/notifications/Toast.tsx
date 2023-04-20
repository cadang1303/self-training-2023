import { useTimeout } from '@/hooks/useTimeout'
import './toast.css'

export const Toast = (props: any) => {
  useTimeout(props.close, 5000)

  return (
    <div className='toast'>
      <div className='toast__text'>{props.children}</div>
      <div>
        <button onClick={props.close} className='toast__close-btn'>
          x
        </button>
      </div>
    </div>
  )
}
