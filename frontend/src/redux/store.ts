/* eslint-disable import/no-named-as-default */
import loadingSlice from '@/components/loader-spinner/loading.slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    loading: loadingSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
