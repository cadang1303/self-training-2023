import { useAppSelector } from '@/redux/hooks'
import './loading.modules.scss'

export default function Loading() {
  const isLoading = useAppSelector((state) => state.loading.isLoading)

  if (!isLoading) return null

  return (
    <div className='loading-overlay'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
