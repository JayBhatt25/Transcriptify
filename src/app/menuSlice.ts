import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
export interface MenuState {
    value: boolean
}

const initialState: MenuState = {
  value: false
}
export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: state => {
      if(state.value){
        state.value = false
      } else {
        state.value = true
      }
      
    },
  }
})

export const { toggleMenu } = menuSlice.actions

export const selectMenuState = (state: RootState) => state.menu.value

export default menuSlice.reducer
