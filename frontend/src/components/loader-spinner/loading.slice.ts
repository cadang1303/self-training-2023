import { RootState } from '@/redux/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface LoadingState {
  isLoading: boolean
}

const initialState: LoadingState = {
  isLoading: false
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const { setLoading } = loadingSlice.actions

export const getIsLoading = (state: RootState) => state.loading.isLoading

export default loadingSlice.reducer
